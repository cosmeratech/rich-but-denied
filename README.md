# rich-but-denied
where even rich accounts are told ‘no’!

A rule-driven account system where having money is not enough.
Payments are allowed or blocked based on predefined policies, not emotions.

# About the Project

Rich but Denied simulates real-world spending restrictions applied to different types of accounts.
Each account may have a high balance, but all transactions must obey category-based rules and limits.

The project focuses on modeling how systems enforce rules consistently, even when users have sufficient funds.

# Concepts Demonstrated

This project demonstrates the following core programming concepts:

Private properties to protect sensitive data like balance and limits

Inheritance to create specialized account types

Method overriding to customize behavior in derived accounts

Polymorphism through a shared payment interface

Map-based rule storage for category-specific limits

# How It Works

Every account starts with a balance

Spending limits are defined per category (food, shopping, travel, etc.)

A payment is processed only if it satisfies both balance and policy rules

Each account type logs payments differently while following the same interface

# Viewing Account Balances

Account balances are stored as private data and are not accessible directly.
To view the current balance of each account, use the provided public method and log it in the console.

After running the payment operations, add the following lines in the browser console:

console.log("Teen balance:", teen.getBalance());

console.log("Adult balance:", adult.getBalance());

console.log("Corp balance:", corp.getBalance());


This will display the remaining balance for each account after all allowed and blocked transactions have been processed.

Balances only change when a payment is successfully approved.
Blocked payments do not affect the balance.

# Where to place this?

Paste these lines after all payment calls

Run them in the same console session where the objects were created
