package main

import (
	"fmt"

	"./accounts"
)

func main() {
	account := accounts.NewAccount("jiwon")
	account.Deposit(100)
	fmt.Println(account.Balance())
}