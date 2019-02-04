---
title: "No man is an island"
date: 2019-02-04T05:00:00-08:00
---

> _No man is an island entire of itself; every man_  
> _is a piece of the continent, a part of the main_

That is the beginning of John Donne's 17th century poem _"No Man is an Island"_. It's also a fitting analogy for the modern software development problem of losing network connectivity in a mobile app.

Suppose you had a twin brother and suppose you both kept detailed journals of important daily events. Being twins, let's assume you'd have the same experiences and that your journals would be identical.

But then one day, one of you goes on a trip away from home. You no longer have the same experiences and your journals diverge.

Upon your twin's return home, you compare journals. You decide to copy your twin's unique journal entries into your own so that you would have a complete record of everything that's happened to both of you. Now when family asks, you can tell them amazing stories about either of you.

This is the basic idea behind applying event sourcing to systems that can operate in disconnected mode, like the scenario I talked about in [my previous article](/articles/the-problem-of-connectivity/). Here is how to solve that problem.

Without a network connection, the app doesn't have the luxury of being able to rely on the back-end. Business rules necessary for disconnected operation should be part of the mobile app. While the back-end keeps a complete copy of all events, the mobile app should keep its own event journal and periodically send its journal to the back-end.

Here's what that might look like:

- Product catalog gets cached in the mobile app

- Network connection is lost. App now runs in disconnected mode

- Customer views a product and places it in the shopping cart. This gets recorded in the app's local event journal. At this point, app's journal has diverged from the master journal kept by the back-end

- Customer views more products and adds them to the shopping cart. More events get logged in the local event journal

- Customer checks-out, pays for the products, and in the process creates an account. All this is stored as events in the journal

- Network connection is reestablished and app reconnects to the back-end. App sends its local event journal to the back-end

- Back-end merges app's event history with its own. In the process, anything that requires action to be taken is handled by the back-end. That includes customer account creation and order processing

What if there is an issue with the order? Perhaps the credit card is declined or some products are out of stock. In that case, the back-end can notify the customer of an issue with their order.

That happens to also be a criticism of this kind of distributed event sourcing. Because we keep the app functional while disconnected, there is a delay between accepting customer input and actually processing it on the back-end. This can be handled through the right kind of language in customer communications and paying attention to the customer experience.

Benefits are many.

Fast, prompt reactions to customer input.

Ability to operate under less-than-ideal conditions. Event-sourced systems are naturally asynchronous and can be much more resistant to errors than traditional systems.

A better customer experience.
