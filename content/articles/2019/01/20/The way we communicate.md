---
title: "The way we communicate"
date: 2019-01-20T05:00:00-08:00
---

Have you ever thought about how we communicate with each other?

We catch up by sharing what's new. We talk about significant events that have happened since the last time we caught up.

One thing we don't do, at least not typically, is to communicate in terms of state. What would that even look like?

Say we meet up for coffee and you ask me "Hey, how are you?" and I start telling you: "Well, let me tell you. I have two cars, a house, sofa, ottoman, TV that's turned off, TV stand with a lamp on it, large clock on the wall, a bunch of chairs, dishwasher is running, plant that's not doing so well in the corner, some framed artwork, ...". You'd stop me before I could finish, with a worried look on your face, and ask me if I was alright.

Instead, the natural response from me would be "Doing great, just bought a new dining table and wife is liking it".

You'd expect me to tell you what's changed since the last time we talked.

Event-sourcing is like that. It's a journal of what's changed.

A traditional SQL database is the opposite. It is a full accounting of state. In a relational database, you are expected to describe a complete inventory of all data, listing current state in the most minute detail.

Imagine if every time you met up with me for coffee, I gave you an entire accounting of the current state of my life. Then expected you to figure out what changed. First, I doubt I'd be capable of coming up with a complete list like that. Second, you'd be playing a game of spot-the-differences to actually understand what's new.

It's not how we communicate.

Yet when we develop software using the traditional relational model that's exactly what we do.

We rationalize it by saying that computers are very fast. A computer can compare two lists and come up with what's different in a fraction of the time it would take a person to do it.

What we don't consider is the effort that we have to put in to translate our natural way of communicating through events into the language of a relational database.

Then we further compound this by writing many lines of obscure code to deal with the relational data model. As the system grows larger, the relational data model becomes more complex. Queries grow larger. Before you know it, you're dealing with nested queries and joins across many tables that make your head spin.

The event journal, on the other hand, remains simple.

No matter how large the system, you can always trivially get a chronological list of "_what's new_". No mental gymnastics required.

Simplicity is worth pursuing.
