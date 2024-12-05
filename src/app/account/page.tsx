import AccountHeader from "@/components/account/AccountHeader";
import BasicInformationCard from "@/components/account/BasicInformationCard";
import ContactInformationCard from "@/components/account/ContactInformationCard";





export default function AccountPage() {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
    
      <BasicInformationCard />
      <ContactInformationCard />
    </div>
  )
}
