import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AdvisorSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <img
              src="https://erp.nitw.ac.in/ext/profile/getUserImage/cs-ravic"
              alt="Faculty Advisor"
              className="w-32 h-32 rounded-full mx-auto"
            />
            <CardTitle className="text-center mt-4">
              Faculty Advisor
            </CardTitle>
            <p className="text-center text-lg font-medium">Prof. S. Ravi Chandra</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <img
              src="https://erp.nitw.ac.in/ext/profile/getUserImage/cs-rashrr"
              alt="Head of Department"
              className="w-32 h-32 rounded-full mx-auto"
            />
            <CardTitle className="text-center mt-4">
              Head of Department
            </CardTitle>
            <p className="text-center text-lg font-medium">Prof. Rashmi Ranjan Rout</p>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}