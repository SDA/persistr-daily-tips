---
title: "Looks like you're having trouble signing in"
date: 2019-02-18T05:00:00-08:00
---

Have you seen a message like this in your Inbox?

> _Looks like you're having trouble signing in_

It happens like this. You try to sign into a web application but can't remember the correct password. You make a couple failed tries. While you're trying to recall the right password for the third time, you receive that email from the very service you're trying to log into.

Google, Facebook, GoDaddy, and many more have adopted this approach. Some services direct you to a help page or to a password reset page. Some even include a handy one-click login link in the email.

It's a handy feature, one of those that _delight_ the customer. Just as I'm about to start thinking about possibly resetting my password, I've already received an email with a handy one-click login link.

I can imagine a product manager writing the following feature definition:

> _As a customer, if I fail entering in a correct password twice in a row, within a 5-minute period, I want to be sent an email with a password-reset link and a one-click login link._

How would we implement this feature?

There is a decent amount of complexity behind this seemingly simple feature request.

We need to keep track of how many failed password attempts there were. And when they occurred, or at least how much time elapsed between them. A successful login would reset everything back to square one. What if failed password attempts continue occurring? At some point we might want to lock the customer account.

Then there are complexities introduced by making the implementation flexible. What if the email were to be sent after 3 failed attempts, instead of 2? What if the timeout were reduced to 2 minutes from 5? What if we wanted to lock out the account if failed attempts persisted past 5 attempts?

And finally consider how we would document the requirements and the implementation. Would someone new to the project be able to maintain the code?

An event-sourced system that used executable workflows would check all of the above boxes.

Here's what that might look like:

![Example image](/images/articles/2019/02/19/trouble-signing-in.png)

This is not just a diagram.

It's an _executable workflow_.

It could be used to both define requirements and to execute the state machine that it describes. Event-sourcing provides the events that could be fed into the state machine. With the right set of tools, we can directly execute the state machine specified by this diagram.

Isn't that neat?
