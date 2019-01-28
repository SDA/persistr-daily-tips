---
title: "Modeling behavior"
date: 2019-01-28T05:00:00-08:00
---

Let me ask you a question. What does your app do?

And I don't mean an elevator pitch but an accurate specification of your app's behavior.

Do you find yourself reaching for UI mockups, Wiki pages, Jira tickets, Google Docs, Slack conversations, emails, and all sorts of other documentation artifacts where the behavior of your app is described in bits and pieces? Or maybe there is a go-to person on your team who everyone else always consults whenever a question comes up about what the app does in a particular scenario?

If yes then this post is for you.

First, you should know that you are not alone.

I can't quantify the exact percentage of software teams that effectively model application behavior but I believe that percentage to be exceedingly low. I believe that the vast majority of application teams don't model app behavior. Most don't even document it. Those that do end up with documentation artifacts that become outdated almost as soon as they're written.

Searching for studies done on behavior modeling offers a clue to how rare this practice is. It seems to only come up for safety-critical systems where human lives are at stake. Only then is the added burden of modeling and documenting app behavior necessary.

Here is a quote that demonstrates the difficulty of capturing app behavior:

> The avionics team had many amazingly talented experts. There were radar experts, flight control experts, electronic warfare experts, hardware experts, communication experts, software experts, etc. I would ask them what seemed like very simple specific questions, such as: "What happens when this button on the stick is pressed?"
>
> In way of responding, they would take out a two-volume document, written in structured natural language, each volume containing something like 900 or 1000 pages. In answer to the question above, they would open volume B on page 389, at clause 19.11.6.10, where it says that if you press this button, such and such a thing occurs. At which point I would say: "Yes, but is that true even if there is an infra-red missile locked on a ground target?" To which they would respond: "Oh no, in volume A, on page 895, clause 6.12.3.7, it says that in such a case this other thing happens." This to-and-fro Q&A session often continued for a while, and by question number 5 or 6 they were often not sure of the answer and would call the customer for a response. By the time we got to question number 8 or 9 even those people often did not have an answer!
>
> It seemed extraordinary that this talented and professional team did have answers to questions such as "What algorithm is used by the radar to measure the distance to a target?", but in many cases did not have the answers to questions that seemed more basic, such as "What happens when you press this button on the stick under all possible circumstances?".

That was David Harel talking about his software consulting experience on an avionics project in the 1980s. That was more than 3 decades ago; yet it could have been written today. I am sure his experience rings true to many software developers now.

For anything other than safety-critical systems, it almost seems incomprehensibly complicated and expensive to even consider modeling app behavior.

Compared to the ocean of tools and techniques available for modeling data, the landscape of tools for modeling behavior is barren. Every modern programming language today has a rich grammar to describe data structures. We even have an entire branch of mathematics devoted to modeling data, in the form of relational algebra which is the basis for SQL. There doesn't seem to be an equivalent when it comes to modeling behavior.

Or is there?

What if I told you that in this barren landscape there was one lush oasis where you could model app behavior cheaply and efficiently? And more, that your model could be executable; meaning that it would always be an accurate model of current app behavior.

That oasis is event-sourcing.

And the mechanism by which it happens is state machines.

Here is a quote that shows why this matters:

> I recall an anecdote in which the blackboard contained a rather complicated statechart that specified the intricate behavior of some portion of the avionics system. There was a knock on the door and in came one of the air force pilots from the headquarters of the project.
>
> He was a member of the "customer" requirements team, so he knew all about the intended aircraft but he had never seen a state machine or a state diagram before, not to mention a statechart. He stared for a moment at this picture on the blackboard and asked "What's that?" One of the members of the team said "Oh, that's the behavior of the so-and-so part of the system, and, by the way, these rounded rectangles are states, and the arrows are transitions between states". And that was all that was said.
>
> The pilot stood there studying the blackboard for a minute or two, and then said, "I think you have a mistake down here, this arrow should go over here and not over there"; and he was right.

That, too, was David Harel talking about the same project after modeling behavior with statecharts. One thing has changed in the last 3 decades. Our models can now be executable.

This ability to have an accurate, up-to-date model of app behavior, available in a format that non-technical stakeholders can understand and contribute to, is the biggest benefit of event-sourcing.
