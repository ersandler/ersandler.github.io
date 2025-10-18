/**
 * Analyzing xG Project Content
 */

export const analyzingXgContent = (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4 text-charcoal leading-relaxed">
        <h3 className="text-xl font-semibold text-conifer">Expected goals are a big deal.</h3>
        <p>
          <a href="https://twitter.com/xGPhilosophy" className="text-conifer hover:text-rust transition-colors">xG Philosophy</a> has nearly half a million followers on Twitter/X, and all they do is post the expected goals statistics from a few games every week. Football fans are obsessed with xG, but just how accurate is it?
        </p>
        <p>
          Expected goals (xG) is a football statistic that estimates the probability that a shot goes into the goal. xG models vary, but the most modern models will include factors like type of shot (e.g. header), location on the pitch, and the position of nearby defenders. Each shot is assigned a value between 0 and 1, inclusive. A penalty kick is generally considered to be worth about .76 xG, which suggests a penalty conversion rate of 76%.
        </p>
        <p>
          In a machine learning sense, xG is the one and only feature of a linear regression predicting goals scored. That means we can run tests for independence, constant variance, and normality of the residuals, which are our assumptions for a linear regression. After conducting said tests, I concluded that the assumptions are not all valid in this case, and that xG, especially when used in small sample sizes, can be misleading.
        </p>
        <p>
          These graphs are compiled from <a href="https://fbref.com/en/" className="text-conifer hover:text-rust transition-colors">FBref's</a> database of Premier League scores and xG that dates back to 2018. The first two plots check that the residuals are independent from the order in which the games occurred, and the amount of xG that occurred in each game. We do this to be sure that there are no patterns lurking in our data that would make the data unfit for linear regression. The plot checking for independence looks good, with no patterns and a random distribution of points throughout. This may not be the case with the constant variance plot, however, which shows clear patterns that correspond to the number of goals scored in a game. These patterns occur because xG is a continuous variable predicting a discrete variable, which can cause problems. Our final graph is a quantile-quantile graph, which checks that the residuals follow a normal distribution. Since the blue points trail decisively off the red line on the upper end of the graph, we can conclude that xG may not be reliable for games that have high xG. This is compounded when working with a smaller dataset, as shown by the second q-q plot, which only features data from half a season.
        </p>
        <p>
          This correlates nicely with the final graph, which is showing the average goals scored for each xG increment, which is rounded to the nearest tenth in Fbref's database. The black line indicates what the graph would look like if xG was a perfect predictor of goals scored; instead, we get a good curve between one and two xG, and abject chaos almost everywhere else. xG simply isn't good at extremes, and it isn't good when the sample size is small.
        </p>
      </div>

      <div className="space-y-6">
        <img src="/images/xg-ind.png" alt="Independence plot" className="w-full rounded-lg border border-gray-200" />
        <img src="/images/constant-variance.png" alt="Constant variance plot" className="w-full rounded-lg border border-gray-200" />
        <div>
          <img src="/images/all-szn-qq.png" alt="Q-Q plot all seasons" className="w-full rounded-lg border border-gray-200" />
          <p className="text-sm text-gray-600 mt-2 text-center">Quantile-quantile plot for xG vs Goals Scored for Premier League games (2018-2024)</p>
        </div>
        <div>
          <img src="/images/1-szn-qq.png" alt="Q-Q plot one season" className="w-full rounded-lg border border-gray-200" />
          <p className="text-sm text-gray-600 mt-2 text-center">Quantile-quantile plot for xG vs Goals Scored for Premier League games (2023-2024)</p>
        </div>
        <div>
          <img src="/images/xg-gs.png" alt="xG vs Goals Scored" className="w-full rounded-lg border border-gray-200" />
          <p className="text-sm text-gray-600 mt-2 text-center">Chart showing relationship between xG produced and average goals scored in the Premier League (2023-2024)</p>
        </div>
      </div>
    </div>
  </div>
);
