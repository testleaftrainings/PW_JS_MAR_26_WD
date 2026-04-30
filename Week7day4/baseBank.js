class BaseBank {
    OpenAccount() {
        console.log("KYC verification done");
    }
    withdrawmoney() {
        console.log("Transaction Audits");
    }
}
class SBI extends BaseBank {
    interestrate() {
        return 2.7;
    }
}
let sbi = new SBI();
sbi.OpenAccount();
sbi.withdrawmoney();
console.log(sbi.interestrate());
export {};
