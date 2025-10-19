/**
 * Machine Learning with High Variance Project Content
 */

export const mlWithHighVarianceContent = (
  <div className="space-y-6">
    <div className="space-y-4 text-charcoal leading-relaxed">
      <h3 className="text-xl font-semibold text-conifer">11 million people play Fantasy Premier League, and none of them are having any fun.</h3>

      <p>
        The second half of that sentence is probably hyperbole, but not by much.{' '}
        <a href="https://fantasy.premierleague.com" className="text-conifer hover:text-rust transition-colors">
          FPL
        </a>, as it's known, is notorious for its <i>high variance of results</i>: the difference between a great week and a terrible one can be dictated by something as tiny as a blade of grass.
      </p>

      <p>
        Machine learning, especially regression, excels when there is a large amount of data on which to draw. What's interesting about this case is that we have plenty of data, but the models still suffer. Think of the issue like a butterfly effect: one data point changes slightly, and the results of the experiment change drastically. In a lot of cases, though, the data is invisible or cannot be quantified. Meteorology is a good example of a modern scientific field where this occurs. Even though the laws of thermodynamics are relatively well understood, and there is an abundance of absurdly accurate data about current conditions, predicting the weather is really hard. It's possible with some uncertainty in the very short term and possible in the aggregate in the long term, but basically impossible in the middle case: nobody can predict well what the weather will be like two months from now. We can play with probabilities, and climate, and historical data, but no simulation can produce anything near a highly meaningful prediction, and that's not going to be fixed by gathering more data.
      </p>

      <p>
        Northeastern University offers{' '}
        <a href="https://undergraduate.northeastern.edu/research/awards/peak-awards-overview/" className="text-conifer hover:text-rust transition-colors">
          Project-Based Exploration for the Advancement of Knowledge (PEAK)
        </a>{' '}
        awards in order to enable students to conduct their own research and fund their independent, academic-adjacent projects. In the Fall of 2023, I applied for, and won, a PEAK Ascent Award to research machine learning methods in cases with high variance in results, using Fantasy Premier League as a case study.
      </p>

      <p>
        Fantasy Premier League is the fantasy sports league run by England's Premier League. Team managers are allowed to select from every single player who plays in the country's top division, so long as they adhere to some conditions, which I'll elaborate on in a moment. Because managers (that's what the people who play FPL are called) receive points based on what their chosen players do on the field, there is a high incentive to predict how well players will perform. The issue is that there's such a higher variance of results. The millions of managers who owned Trent Alexander-Arnold, for example, were left rueing his{' '}
        <a href="https://youtu.be/gNC0cUJCpTo?t=509" className="text-conifer hover:text-rust transition-colors">
          big miss against Arsenal
        </a>{' '}
        when the ball took a nearly imperceptible bobble that cost his owners serious points. How does one even begin to try to make predictions in that context? That's the question I set out to answer.
      </p>

      <p>
        The project thus far has had two stages: creating the solver and creating the optimization metrics. Creating the solver was simple in theory, but more complex in execution. Basically, the goal was to get the program to recognize the limits of FPL's transfer. You must have a certain number of players in each position, stay below a given budget, and cannot have too many players from the same team. Additionally, you must designate some players to be "benched" (those players don't get any points unless one of your starters does not play), and one player to be "captain" (this player gets double points). The solver is simply a function that uses Python's{' '}
        <a href="https://pypi.org/project/PuLP/" className="text-conifer hover:text-rust transition-colors">
          PuLP
        </a>{' '}
        library for linear programming to recognize these limitations and optimize for some numerical variable. Once run, the function returns a valid FPL team, including denoting starters, ordered bench players, and captain. The solver is mostly to make this project practical for FPL managers; from a research standpoint, it's nothing more than a nifty bit of code.
      </p>

      <p>
        The next step was to create a metric for which to optimize. One option would be a player's points per game, which intuitively tracks how good they've been over the course of the season. I'm skeptical, however. Points per game is very easily swayed by one big or one bad performance, and may not be the best way to predict, in the medium term, how well players will do. Instead, I created a metric called "overachievement," which is defined as the percentage of games in which a player does better than the average asset in their position. We calculate the average asset value by taking the average points per week of a player, then scaling by its ownership. The more owned a player is, the more we want to beat them, so the more weight they have in the average. A full team of players who perform above average more than 50% of the time would by definition be an above average team.
      </p>

      <div className="text-center">
        <img src="/images/fpl-graph.jpg" alt="FPL Analysis Graph" className="w-full max-w-3xl mx-auto rounded-lg border border-gray-200" />
      </div>

      <p>
        Above is all forwards with at least 450 minutes played as of 1/10/2024, graphed by their average points per game and their overachievement metric. The size of a point indicates their price in FPL, which isn't relevant for the analysis but is relevant if you're here looking for advice on which forward to pick up for the upcoming weeks. The dark green arrow indicates a line of best fit for the majority of the data. The interesting arrow is the light green one, which points to the dot representing Aston Villa striker Ollie Watkins. Watkins is notable because he is the first player in which I observed what I've dubbed the "Ollie Watkins Effect," where we can predict a player's regression to the mean based on their points per game and overachievement scores. At the beginning of the season, Watkins was located at the tail of the arrow, with a surprisingly high points tally given how rarely he overachieved. Over the course of the season, he has scored fewer points per game, even though he has overachieved more often. This seemingly bizarre occurrence was not an isolated event. Solly March, Heung Min Son, and half a dozen other outliers have shown this movement over the course of the season. Based on this, I made two predictions, corresponding to the orange arrows on the graph. Time will tell how accurate the Ollie Watkins Effect is at predictions.
      </p>

      <p>
        Even if this effect is effective at making predictions, it might not apply to the weather. However, it could apply to finance; specifically stocks. We can measure how well a stock does against its competitors in a very similar way to how we measure how good a player does against the others at his position.
      </p>

      <p>
        The code for the data collection, overachievement metric, solver, and several related functions are in{' '}
        <a href="https://github.com/ersandler/ml-with-high-variance" className="text-conifer hover:text-rust transition-colors">
          this GitHub repository
        </a>.
      </p>
    </div>
  </div>
);
