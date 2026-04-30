import { RBI } from "./RBIrule"

abstract class BaseBank implements RBI{


    OpenAccount(): void {
          console.log("KYC verification done")
    }

    withdrawmoney():void{
        console.log("Transaction Audits")
        
    }
    abstract interestrate(): number


}

class SBI extends BaseBank{

    interestrate(): number {
        return 2.7
        
    }

    
}

let sbi=new SBI()
sbi.OpenAccount()
sbi.withdrawmoney()
console.log(sbi.interestrate())