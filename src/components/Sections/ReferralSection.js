import { Button } from "@/components/ui/button";
import LineDivider from "../LineDivider";


const ReferralSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <LineDivider text="Referral & Earn" />
        <p className="text-xl text-gray-600 mb-6">
          Our referral program is now live! Join today and share the love of coding while earning up to 20% commission
        </p>
        <Button
          variant="orange_yellow"
          onClick={() => window.location.href = '/referral'}
        >
          Join Referral Program
        </Button>
      </div>

    </section>
  );
}

export default ReferralSection;
