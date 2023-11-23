public class GameResult
{
    public int Id { get; set; }
    public string PlayerChoice { get; set; }
    public string ComputerChoice { get; set; }
    public string Result { get; set; }
    public DateTime Timestamp { get; set; }
}
public static class GameResultsData
{
    public static List<GameResult> Results = new List<GameResult>();
}