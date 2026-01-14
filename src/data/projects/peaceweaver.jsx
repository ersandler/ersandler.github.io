/**
 * Peaceweaver!
*/

export const peaceweaverContent = (
  <div className="space-y-6">
    <div className="space-y-4 text-charcoal leading-relaxed">
      <p>
        PeaceWeaver is an agentic LLM developed for the Institution of Economics and Peace (IEP), designed to integrate with their database and specially trained for the intricities of peace and conflict data. PeaceWeaver has been used by IEP research, communications, and executive staff to sketch out report ideas, quickly test hypotheses that would otherwise take months to do manually, and find the most relevant data for media requests. It is also able to perform basic regression and correlation analysis. 
      </p>
      <img src="/images/peaceweaver1.png" alt="PeaceWeaver" className="w-full rounded-lg border border-gray-200" />
      <p>
        PeaceWeaver does all this by using Anthropic's open source Model Context Protocol (MCP) to provide tools to an instance of an LLM running on Microsoft Azure. The results of queries are streamed to an auth-protected front end, which allows privacy for individual chats, and also support administrator actions and auditing, thread management, and chat histories.
      </p>
      <p>
        This project broke new ground for me as a developer, including teaching me the basics of front end development using Vite and TypeScript, as well as including the largest REST API and relational database I've ever designed. It also included my first foray into the fringes of cybersecurity, where I learned the theory behind OAuth and JWT tokens. While I don't feel that LLMs are my calling, this project gave me invaluable experience with application design and implementation. 
      </p>
      <p>
        PeaceWeaver also represents my contribution to sustainable AI. While it does allow for efficiency in some tasks, it is trained to understand the limits of the provided data and refrain from answering questions that are not clearly applicable to the provided datasets. Additionally, full logs of every databse query are available, meaning that every calculation can be traced for extra assurance. This sort of transparency is crucial: just because LLMs are black boxes doesn't mean that the algorithms that use them have to be. 
      </p>
    </div>


  </div>
);
