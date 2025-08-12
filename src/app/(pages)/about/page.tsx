
const About = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl p-20 border-l border-r border-l-border border-r-border">
          <h1 className="text-7xl font-light text-foreground w-4xl mb-8">The future of industrial engineering lies where AI meets Physics</h1>
          <p className="text-2xl font-light text-muted-foreground w-2xl mb-4">
            Engineering and manufacturing projects need a change, but progress is held back by slow, expensive simulations that require too much computing power.
          </p>
          <p className="text-2xl font-light ">Our mission here is to change that.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-2xl p-20 border-l border-r border-l-border border-r-border border-t border-t-border grid grid-cols-2 gap-20">
          <div>
            <p className="text-muted-foreground mt-20 text-xl"><span className="text-foreground">Our vision</span> - to pioneer universally applicable AI-driven physics simulation models that accelerate engineering and manufacturing processes across industries – from aviation and energy to semiconductors, automotive and chemicals. We aim to enable real-time interaction, streamline production planning, and unlock new possibilities in design optimization.</p>
          </div>
          <div>
            <img src="/assets/images/emmi_founders.jpg" className="object-cover h-full path" />
            <p className="text-sm pt-3">Founders: Miks Mikelsons, Dennis Just, Johannes Brandstetter <span className="text-muted-foreground">(from left to right)</span></p>
          </div>

        </div>
        <div className="mx-auto max-w-screen-2xl gap-40 grid grid-cols-2 text-muted-foreground p-20 border-l border-r border-l-border border-r-border border-t border-t-border ">
          <div>The future we envision is one where AI surrogates reduce computational costs, foster rapid innovation, and drive industrial-scale engineering at unprecedented speeds. Our starting point is computational fluid dynamics (CFD), but our ambition extends to real-time adaptive simulations and multi-physics models.</div>
          <div>Industrial-scale problems demand industrial-scale solutions. Much like medium-range weather forecasting challenged deep learning due to its scale, industrial simulations with tens of millions of mesh cells present a similar challenge – one we are ready to tackle. We are inspired by the ambition and intellectual rigor of Emmy Noether, whose groundbreaking contributions to physics mirror our commitment to redefining industrial engineering.</div>
        </div>
      </section>

      <div className="overflow-x-auto opacity-40 hover:opacity-100 transition-opacity duration-300">
        <div className="flex gap-3 w-full justify-evenly max-w-screen-xl mx-auto">
          <img src="/assets/images/careers_1.jpeg" className="path" />
          <img src="/assets/images/careers_2.webp" />
          <img src="/assets/images/careers_3.webp" />
          <img src="/assets/images/careers_4.jpeg" />
        </div>
      </div>


      <div>
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="space-y-8">

            <div className="w-3xl text-foreground space-y-6">


              <h3 className="text-7xl">Emmi AI is not just building models; we are building the future of industrial innovation.</h3>
              <p className="text-muted-foreground">
                As we scale, we seek partners who share our conviction: that AI is not merely a tool, but a catalyst for transforming how we design, build, and innovate.<br /><br />
                To our investors, collaborators, and future team members – join us as we push the boundaries of what's possible. Together, we will unlock a new era of efficiency, creativity, and excellence in engineering.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;