package accounts

import "errors"

// Account structure
type Account struct {
	owner string
	balance int
}

// NewAccount creates Account
func NewAccount(owner string) *Account {
	account := Account{owner: owner, balance: 0}

	return &account
}

// Deposit x amount on your account
func (a *Account) Deposit(amount int) {
	a.balance += amount
}
// Withdraw x amount on your account
func (a *Account) Withdraw(amount int) error {
	if a.balance < amount {
		return errors.New("Can't withdraw this amount.")
	}
	a.balance -= amount

	return nil
}

// Get the balance of the account
func (a Account) Balance() int {
	return a.balance
}