/**
 * Simulating the Lewis Signalling Game Project Content
 */

export const simulatingLsgContent = (
  <div className="space-y-6">
    <div className="space-y-4 text-charcoal leading-relaxed">
      <h3 className="text-xl font-semibold text-conifer">Context is everything.</h3>
      <p>
        That's the conclusion I drew from this evolutionary game theory project, where I used neural networks built using TensorFlow's Keras interface to assess the Lewis signalling game as a model of the minimal conditions for the evolution of meaning.
      </p>
      <p>
        In evolutionary game theory, the Lewis signalling game is considered a model of the minimal conditions for the evolution of meaning, and an argument that said meaning is conventional. Essentially, all you need for meaning to evolve are the conditions of the game: the states, some reward, and the ability to communicate. The conventional aspect comes from the fact that there's no reason for any given messages to correspond with state-action pairs: a game theoretic receiver could extract meaning from the messages so long as the sender is consistent.
      </p>
      <p>
        The Lewis signalling game is played by two players: a sender and a receiver. Each round, the sender observes some state of the world, and must choose which of a finite list of messages to send. Upon receiving the message, the receiver must pick from a finite list of actions. Depending on the state of the world and the action chosen, the players receive rewards (or punishments). The simplest version of this game, called the "basic cooperative" Lewis signalling game, features two states, two messages, and two actions, where both players receive rewards when the state and action chosen correspond.
      </p>
      <p>
        In the paper below, I argue that there's something missing from the Lewis signalling game in such a way that it should not be considered the minimal conditions for the evolution of meaning.
      </p>
    </div>

    {/* PDF Embed */}
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      <iframe
        src="/context-is-everything.pdf"
        className="w-full h-[800px]"
        title="Context is Everything Paper"
      />
    </div>
  </div>
);
