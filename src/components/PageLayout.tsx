namespace cAlgo
{
    [Robot(TimeZone = TimeZones.UTC, AccessRights = AccessRights.FullAccess)]
    public class MovingAverageCrossover : Robot
    {
        [Parameter("Fast MA Periods", DefaultValue = 10)]
        public int FastMAPeriods { get; set; }

        [Parameter("Slow MA Periods", DefaultValue = 20)]
        public int SlowMAPeriods { get; set; }

        private SimpleMovingAverage _fastMA;
        private SimpleMovingAverage _slowMA;

        protected override void OnStart()
        {
            _fastMA = Indicators.SimpleMovingAverage(MarketSeries.Close, FastMAPeriods);
            _slowMA = Indicators.SimpleMovingAverage(MarketSeries.Close, SlowMAPeriods);
        }

        protected override void OnBar()
        {
            if (_fastMA.Result.Last(1) > _slowMA.Result.Last(1) && Positions.Count == 0)
            {
                ExecuteMarketOrder(TradeType.Buy, SymbolName, VolumeInUnits, "Buy Order", null, null, null);
            }
            else if (_fastMA.Result.Last(1) < _slowMA.Result.Last(1) && Positions.Count == 0)
            {
                ExecuteMarketOrder(TradeType.Sell, SymbolName, VolumeInUnits, "Sell Order", null, null, null);
            }
        }
    }
}