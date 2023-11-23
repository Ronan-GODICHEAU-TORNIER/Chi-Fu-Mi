using Microsoft.AspNetCore.Mvc;

[Route("api/game")]
[ApiController]
public class GameController : ControllerBase
{
    // POST api/game/play
    [HttpPost("play")]
    public IActionResult Play([FromBody] GameResult gameResult)
    {
        GameResultsData.Results.Add(gameResult);
        return Ok(new { Message = "Résultat enregistré avec succès" });
    }

    // GET api/game/scores
    [HttpGet("scores")]
    public ActionResult<IEnumerable<GameResult>> GetScores()
    {
        var sortedScores = GameResultsData.Results.OrderByDescending(score => score.Timestamp).ToList();
        return Ok(sortedScores);
    }
}