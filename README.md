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
