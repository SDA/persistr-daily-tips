---
title: "Microservices and event-based architectures"
date: 2019-02-08T05:00:00-08:00
---

Microservices are trending! It seems like everyone is either building them or talking about building them.

It's just so very appealing - a bunch of small, isolated components with clear responsibilities that can be easily and quickly built, tested, and deployed.

But there is a problem that you'll run into if you go down this road. The problem lies in dependencies between microservices. Specifically, the big issue is one of performance.

Say you're wanting to expose an API endpoint that returns a detailed list of all resources a user account has access to. Internally, your back-end is implemented as a set of mostly independent microservices. Each type of resource is managed by a different service.

Let's say you have a microservice that controls what resources a particular user can access. You make a call to it, pass the user identifier, and get back a list of resource identifiers. To obtain details on one of the resources whose identifier you just got, you make a call to a different microservice that manages that specific resource. Repeat that for as many resources as you'd like. Finally, aggregate all of the responses together in one complete JSON document. And send that back as the response of the API call.

That's a lot of calls between microservices. And they all happen every single time that API endpoint is called.

It's a common problem when you go from a monolithic to a microservice architecture. Microservices are meant to be single-purpose. As you start to layer microservices on top of each other, dependencies become difficult to manage and cause performance problems.

The solution is simple but can be tricky to implement if it's your first time doing it. You need to implement an event-based architecture. And then create projections and read models. That will solve your performance issues.

If you don't already have an event-based architecture, you can retrofit one in. It's not too hard.

Here is how this solution works in a nutshell.

Microservices emit events on state changes. Other microservices listen to events emitted by microservices they depend on. They then project those events onto a data model that is read-only. Finally, when a higher-level microservice needs some data from a lower-level microservice, it doesn't need to necessarily call the lower-level service. Instead, it can immediately get the data it needs from its local read model.

_If you'd like to discuss your specific project, I offer a software architecture assessment & recommendations service. [Book a 30-minute discovery call.](https://calendly.com/persistr)_
