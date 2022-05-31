package main

import (
	"fmt"
	"project_1/accounts"
)

func main() {
	account := accounts.NewAccount("jiwon")
	account.Deposit(100)
	err := account.Withdraw(200)
	if err != nil {
		//log.Fatalln(err)
		fmt.Println(err)
	}
	fmt.Println(account.Balance())
}