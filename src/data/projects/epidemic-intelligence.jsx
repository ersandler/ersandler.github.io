/**
 * epidemic-intelligence Project Content
 */

export const epidemicIntelligenceContent = (
  <div className="space-y-6">
    <div className="space-y-4 text-charcoal leading-relaxed">

      <p>
        Built for Northeastern University's Network Science Institute, epidemic-intelligence is BigQuery-driven Python package for processing and visualizing large scale spatio-temporal simulation data.
      </p>
      <p>
        The Network Science Institute, unsurprisingly, produces a lot of network data. Specifically, they do a lot of work with epidemic simulations, such as for the <a href="https://covid19scenariomodelinghub.org/" className="text-conifer hover:text-rust transition-colors">Covid-19 Scenario Modelling Hub</a>, where they use their <a href="https://www.networkscienceinstitute.org/publications/a-multiscale-modeling-framework-for-scenario-modeling-characterizing-the-heterogeneity-of-the-covid-19-epidemic-in-the-us" className="text-conifer hover:text-rust transition-colors">Global Epidemic and mobility (GLEAM)</a> algorithm to model the mobility of the Covid virus. This leads to massive amounts of time series data: each row in a GLEAM forcast includes an origin, target, date, and scale. There are tens of thousand of locations in the GLEAM model, and some forecasts are months long, leading to millions upon millions of data points that need consolidating and analyzing. 
      </p>
      <p>
        This is where epidemic-intelligence comes in. It allows researchers at the Network Science Institute to directly access GLEAM data stored in BigQuery, and use half a dozen algorithms to make publication ready charts and visualizations. 
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-center">
          <img src="/images/boxplot.png" alt="Functional Boxplot" className="w-full rounded-lg border border-gray-200" />
          <p className="text-sm text-gray-600 mt-2">A functional boxplot using modified band depth</p>
        </div>
        <div className="text-center">
          <img src="/images/importation_plot.png" alt="Importation Plot" className="w-full rounded-lg border border-gray-200" />
          <p className="text-sm text-gray-600 mt-2">An area chart showing importation over time</p>
        </div>
      </div>
      <p>
        The functional boxplot is of particular note. Summarizing time series data is very tricky. The default strategy of simply taking the mean of a sample turns out to fail us, as shown by <a href="https://www.tandfonline.com/doi/abs/10.1198/jcgs.2011.09224" className="text-conifer hover:text-rust transition-colors">Sun and Genton</a>. Here's the problem: if you average 50 epidemic curves that peak on Monday with 50 that peak on Friday, you get a fake curve that peaks on Wednesday—when no actual epidemic peaked. This is a disaster for forecasting, where predicting the timing and height of peaks is the entire point.
      </p>
      <p>
        The solution is called Modified Band Depth (MBD). Instead of averaging curves point-by-point, MBD ranks curves by how "central" they are to the group—essentially finding a median curve rather than a mean. This preserves the actual shape and timing of real epidemic peaks. epidemic-intelligence implements this entirely within BigQuery using procedurally generated SQL statements, meaning it can rank thousands of curves in seconds by leveraging Google's architecture.
      </p>
      <p>
        This work has been presented to the CDC and WHO. For more information on epidemic-intelligence, you can check out the library on <a href="https://pypi.org/project/epidemic-intelligence/" className="text-conifer hover:text-rust transition-colors">PyPI</a> or see it's full documentation and examples <a href="https://www.matteochinazzi.com/epidemic-intelligence/content/setup.html" className="text-conifer hover:text-rust transition-colors">here</a>. 
      </p>
    </div>
  </div>
);
