import { Button } from "@/components/ui/button";
import { jobs } from "@/app/data/jobs"
import Link from "next/link";

const Careers = () => {  

  const values = [
    {
      title: "Curiosity & Forward Thinking",
      description: "We are always on the lookout for fresh ideas, ready to question the usual ways of doing things and bring creativity to AI and industrial applications."
    },
    {
      title: "Team Collaboration & Respect",
      description: "We are team-oriented, value others' perspectives, and support each other's success to drive Emmi AI's goals."
    },
    {
      title: "Integrity & Accountability",
      description: "We take ownership of our work and uphold high standards, whether collaborating with the Emmi AI team or with customers."
    },
    {
      title: "Adaptability, Resilience & Problem Solving",
      description: "We thrive in a dynamic, fast-paced environment, approaching challenges with a \"how can we make this work?\" mindset and staying resilient and adaptable to shifting priorities."
    }
  ];

  return (
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-6xl text-foreground mb-6">Careers</h1>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Emmi AI is not just building models; we are building the future of industrial innovation!
            </p>
            <p>
              As we scale, we seek talent who shares our conviction: that AI is not merely a tool, but a catalyst for transforming how we design, build and innovate.
            </p>
            <p>
              To our investors, partners and future team members – join us as we push the boundaries of what's possible.
            </p>
            <p className="font-medium text-foreground">
              Together, we will unlock a new era of efficiency, creativity and excellence in physical world engineering.
            </p>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl text-foreground mb-8">Open Positions</h2>
          
          <div className="mb-6">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 bg-muted/50 font-medium text-sm text-foreground">
                <div>Job title</div>
                <div>Work model</div>
                <div>Department</div>
                <div></div>
              </div>
              {jobs.map((position, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 p-4 border-t border-border items-center">
                  <div className="text-foreground font-medium">{position.title}</div>
                  <div className="text-muted-foreground">{position.workModel}</div>
                  <div className="text-muted-foreground">{position.department}</div>
                  <div>
                    <Button variant="outline" size="sm">
                        <Link href={`/careers/${position.id}`}>View job</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-4 mb-16">
            <div className="col-span-4">
                <img src="/assets/images/careers_1.jpeg"/>
            </div>
            <div className="col-span-2">
                <img src="/assets/images/careers_2.webp"/>
            </div>
            <div className="col-span-3">
                <img src="/assets/images/careers_3.webp"/>
            </div>
            <div className="col-span-3">
                <img src="/assets/images/careers_4.jpeg"/>
            </div>            
        </div>

        {/* What Drives Us */}
        <div className="mb-16">
          <h2 className="text-3xl text-foreground mb-8">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equal Opportunity */}
        <div className="mb-12">
          <h2 className="text-3xl text-foreground  mb-6">Equal Opportunity, Exceptional People</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              At Emmi AI, we are committed to building a diverse, inclusive and high-performing team. We welcome diverse perspectives, backgrounds, and experiences, believing they drive innovation and creativity.
            </p>
            <p>
              We encourage all qualified candidates to apply, regardless of race, ethnicity, gender, disability, age, or background.
            </p>
          </div>
        </div>

        {/* Team Names */}
        <div className="text-center">
          <p className="text-lg text-foreground font-medium">Johannes, Dennis, Miks</p>
        </div>
      </main>
  );
};

export default Careers;