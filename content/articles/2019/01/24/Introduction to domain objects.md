---
title: "Introduction to domain objects"
date: 2019-01-24T05:00:00-08:00
---

List member Stephen sent in this comment on my previous article about [brand promises and event-sourcing](/articles/brand-promises-and-event-sourcing/).

> _Not only can an event sourced system detect constraints after the fact, it can prevent them from happening by denying the state transition altogether when the event source is paired with a state machine._

Let's unpack this comment.

An event-sourced system doesn't create events directly. There is instead a two-step process. First, a command is issued to direct the system to take action. As a result of taking the action, an event is logged in the journal.

Here is a typical example of a customer changing their mailing address.

> _Change address -> Customer -> Address changed -> Journal_

`Change address` command is sent to a customer object. This results in an `address changed` event being written to the journal.

What if the address was malformed in some way? The customer object could perform validation and reject the change. Instead of issuing a successful `address changed` event, it could note the failed address change by issuing a `malformed address` event.

> _Change address -> Customer -> Malformed address -> Journal_

In other words, the `Customer` object contains _business rules_ that enforce constraints on how state of a specific object can be changed.

If we didn't have any enforcement of constraints, we could put any object into any state by recording an event with arbitrary data. This is not allowed.

In a traditional system with a relational database, business logic can be implemented in many places. In fact, I often see some business rules being enforced at the SQL database level through database constraints and triggers, other business rules enforced at the so-called _business logic layer_ in an application, and yet even more business rules enforced at various places where data is input into the system.

Unlike what we see with traditional systems, in an event-sourced system business rules are concentrated within the `Customer` object (as per the example above). This object is responsible for validating every command that comes in, ensuring that the command can be applied, and then applying the command.

In Domain Driven Design (DDD) terminology, objects like the `Customer` object are called _aggregate roots_. I prefer a simpler term with minimal technical jargon. For this reason, I refer to such objects as _domain objects_. These are objects within the domain we're modeling.

Domain objects are time-augmented state machines.

More on this next time.
