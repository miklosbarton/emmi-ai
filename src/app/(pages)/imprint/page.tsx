
const Imprint = () => {
  return (
    <div className="bg-background mb-20">
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-gray max-w-none">
          <h1 className="text-3xl font-bold text-foreground mb-8">Imprint</h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Company Information</h2>
              <div className="text-muted-foreground">
                <p>Emmi AI GmbH</p>
                <p>Bürgerstraße 6</p>
                <p>4020 Linz</p>
                <p>Austria</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Registered Office</h2>
              <p className="text-muted-foreground">Linz, Austria</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Legal Form</h2>
              <p className="text-muted-foreground">Limited Liability Company (Gesellschaft mit beschränkter Haftung)</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Company Registration</h2>
              <p className="text-muted-foreground">
                Registered at the Regional Court (Landesgericht) Linz under the registration number FN 643484 a.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Business Purpose</h2>
              <p className="text-muted-foreground">
                Optimization of product designs and industrial processes through physics‑based models and machine learning, 
                as well as the provision of platforms and services for applications in industrial sectors.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Managing Director</h2>
              <p className="text-muted-foreground">Dennis Just</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Declaration</h2>
              <p className="text-muted-foreground">
                This company was established pursuant to the declaration dated 04 December 2024.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Legal Notice</h2>
              <p className="text-muted-foreground">
                The information provided above is in accordance with the requirements of the Austrian E-Government Act 
                (E-GovG) and other applicable regulations. No liability is assumed for the content of external links.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Imprint;