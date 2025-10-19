/**
 * NBA Elo Ratings Project Content
 */

export const nbaEloRatingsContent = (
  <div className="space-y-6">
    <div className="space-y-4 text-charcoal leading-relaxed">
      <h3 className="text-xl font-semibold text-conifer">I made some colorful graphs. Here they are:</h3>

      {/* 2x2 grid of Elo graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-center">
          <img src="/images/eastelos.png" alt="Eastern Conference Elos" className="w-full rounded-lg border border-gray-200" />
          <p className="text-sm text-gray-600 mt-2">How the Eastern Conference's Elos have developed over the course of the season</p>
        </div>
        <div className="text-center">
          <img src="/images/westelos.png" alt="Western Conference Elos" className="w-full rounded-lg border border-gray-200" />
          <p className="text-sm text-gray-600 mt-2">How the Western Conference's Elos have developed over the course of the season</p>
        </div>
      </div>

      <p>
        As awesome as colorful graphs are, why did I make them?
        I started playing chess seriously at the beginning of the COVID lockdown. I find chess fascinating, mostly for the usual reasons, but also because of the grip that one algorithm has over millions of people. The Elo algorithm is what's used to compute the relative scores of chess players. You get points depending on the expected value of your match, where 0 is a loss, 1 is a win, and .5 is a tie. The difference between expected and actual outcome is then used to alter your Elo score, so it goes up if you win, and down if you lose. Our algorithm will also reward teams for winning with a high margin of victory. Both over the board and online, there's a complete obsession in chess with quality of results: as long as you win, it doesn't matter how. You get your Elo points regardless. What if we applied this metric to basketball? What if we don't care about injuries, or margin of victory?
      </p>

      <p>
        Through the end of the 2022-23 NBA season, FiveThirtyEight published their{' '}
        <a href="https://projects.fivethirtyeight.com/2023-nba-predictions/" className="text-conifer hover:text-rust transition-colors">
          NBA predictions
        </a>, which were based on a mixture of advanced basketball statistics and Elo score. I'm using their work as inspiration for my own project. The goal is to produce accurate, insightful ratings for teams <i>that have predictive capabilities</i>. The code for this project, which is still ongoing, is available in{' '}
        <a href="https://github.com/ersandler/nba-elo" className="text-conifer hover:text-rust transition-colors">
          this GitHub repository
        </a>.
      </p>

      <p>
        As of early 2025, Nate Silver announced plans to bring back the NBA Elo rankings, and make them greater than ever. He plans to include:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>high-level team rankings like the ones I do here</li>
        <li>player-based rankings</li>
        <li>mixed rankings</li>
      </ul>

      <p>
        As much of that was where I was planning on taking this project, it's on the back burner for now. I'm still working with the Elo and{' '}
        <a href="https://en.wikipedia.org/wiki/Glicko_rating_system" className="text-conifer hover:text-rust transition-colors">
          Glicko
        </a>{' '}
        rating systems, but working more on my chess interests. Now, back to the basketball!
      </p>

      <p>
        First, regarding our retrospective regular season ratings: they're pretty good. The most notable indication of this is the Philadelphia 76ers, who lost star center Joel Embiid to injury at the end of January. Similarly, we can track how the three way dogfight for the top seed in the West was impacted by Minnesota forward Karl Anthony Towns' injury, and suggest that his teammate Anthony Edwards is the one doing most of the heavy lifting for that Timberwolves team. We can also track the historically awful seasons of the Pistons and Wizards, as well as measure just how good this Celtics team is. Generational.
      </p>

      <p>
        Now, for the playoffs. The math behind the Elo system generates probabilistic results for each game. We can take those results, update the rating recursively, and then implement logic in Python to simulate the NBA playoffs. All of this only takes about a tenth of a second, so it is a relatively easy problem to brute force. This is good, because calculating the actual conditional probabilities using Bayes' Theorem would take far too long to run on any machine. Using tens of thousands of simulations, we can estimate the probability of almost anything that may occur during the postseason. In my case, I'm tracking the probability that each team makes it to a given round of the playoffs, or wins the whole thing. These predictions are returned in Pandas dataframes that are super easy to work with; if you'd like any data or specific predictions, please feel free to reach out.
      </p>

      <p>
        Now finally, the moment you've all been waiting for. My probabilistic predictions for the destination of this year's NBA Championship:
      </p>

      <p className="font-semibold">Last year's predictions:</p>

      <div className="text-center">
        <img src="/images/champprobs.png" alt="Championship probabilities" className="w-full max-w-2xl mx-auto rounded-lg border border-gray-200" />
        <p className="text-sm text-gray-600 mt-2">My probabilistic NBA Championship predictions as of 4/1/2024</p>
      </div>
    </div>
  </div>
);
