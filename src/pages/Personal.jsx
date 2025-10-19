/**
 * Personal Page
 * About/background page with photo of Pearl
 */

function Personal() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-conifer mb-4">
        About Me
      </h1>

      {/* Content container with text and image */}
      <div className="flex flex-col md:flex-row gap-8 items-start">

        {/* Text content */}
        <div className="flex-1 space-y-4 text-charcoal leading-relaxed">
          <p>
            Outside of education, I have a wide variety of interests and hobbies about which I'm very passionate. I'm a massive Arsenal fan, and also support Williams F1, Indiana University basketball, and the Boston Celtics. I play chess, both online and over the board, and particularly enjoy playing tactical open positions. I also recently took up fencing! I love hiking and the outdoors, and one of my biggest goals for the next year is to spend more time outside, in nature, in the mountains. I'm an avid reader, especially of well-written and intricate fantasy. I also have an inexplicable fascination with urban planning, which manifests in my unconditional hatred of cloverleaf interchanges.
          </p>
          <p>
            Pictured are me and my dog Pearl, the winner of the{' '}
            <a
              href="https://news.northeastern.edu/2019/04/19/northeastern-university-students-use-cute-dogs-to-evaluate-democratic-voting-systems/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-conifer hover:text-rust transition-colors"
            >
              Northeastern Department of Philosophy and Religion's Cutest Dog contest
            </a>.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-80 flex-shrink-0">
          <img
            src="/images/pearl.jpg"
            alt="Eli and Pearl"
            className="w-full rounded-lg border-2 border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}

export default Personal;
