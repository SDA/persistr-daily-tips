---
title: "Reducing event streams"
date: 2019-02-06T05:00:00-08:00
---

Here is a simple event stream:

```js
const events = [
    { type: 'account opened', credit: 5000 },
    { type: 'cheque deposited', credit: 50000 },
    { type: 'bill paid', debit: 10000, payee: 'AT&T' }
]
```

This event stream is located in memory but let's ignore that for now.

We'd like to know what the current account balance is, given above transactions.

```js
const rules = (account, event) => {
    if (event.type === 'account opened') {
        account.balance = event.credit
    }
    else if (event.type === 'cheque deposited') {
        account.balance += event.credit
    }
    else if (event.type === 'bill paid') {
        account.balance -= event.debit
    }
    return account
}

const account = events.reduce(rules, {})

console.log(account.balance)
```

Prints out `45000` which is exactly what you'd expect: `5000 + 50000 - 10000 = 45000`

[Run it on JS Bin](https://jsbin.com/renorev/1/edit?js,console)

Since this is a toy example, it is missing a number of important features:

- Data is not saved anywhere

- Retrieving the current balance requires looping over all events in the stream

- There is no type checking performed

- There is no mechanism for other components to be notified when a new event is saved

These are all issues that Persistr solves.

Here's what the above code looks like using Persistr. It's a one-liner to retrieve the current value of a domain object:

```js
const account = await stream.object('Bank Account').latest()
console.log(account.balance)
```

Persistr is about making event-sourcing simple.
