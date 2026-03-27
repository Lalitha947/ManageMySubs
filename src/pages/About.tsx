import { FiTarget, FiLock, FiEdit2, FiZap, FiCode, FiTool } from 'react-icons/fi'

function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            About Subscription Manager
          </h1>
          <p className="text-xl text-text max-w-2xl mx-auto">
            We're on a mission to help people take control of their subscription spending
            and make informed decisions about their recurring expenses.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text mb-6">Our Story</h2>
              <div className="space-y-4 text-text">
                <p>
                  Subscription Manager was born from a simple observation: in our digital age,
                  we're all subscribed to countless services, from streaming platforms to software tools,
                  and it can be overwhelming to keep track of them all.
                </p>
                <p>
                  We realized that many people were either overspending on subscriptions they forgot about
                  or missing important renewals. That's why we created a simple, beautiful tool to help
                  everyone stay on top of their subscription game.
                </p>
                <p>
                  Today, thousands of users trust us to manage their subscriptions, and we're just getting started.
                  Our goal is to become the go-to platform for subscription management worldwide.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl">
              <div className="text-center">
                <div className="card-icon text-6xl mb-4 text-accent"><FiTarget size={60} /></div>
                <h3 className="text-2xl font-semibold mb-2 text-white">Our Mission</h3>
                <p className="text-white">
                  To empower individuals and businesses to make smarter decisions about their subscriptions
                  and take control of their financial future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Our Values</h2>
            <p className="text-xl text-text">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="card-icon text-5xl mb-4 text-accent"><FiLock size={50} /></div>
              <h3 className="text-xl font-semibold mb-3 text-text">Privacy First</h3>
              <p className="text-text">
                Your financial data deserves the highest level of protection.
                We use industry-standard encryption and never sell your information.
              </p>
            </div>

            <div className="text-center">
              <div className="card-icon text-5xl mb-4 text-accent"><FiEdit2 size={50} /></div>
              <h3 className="text-xl font-semibold mb-3 text-text">User-Centric Design</h3>
              <p className="text-text">
                We believe great software should be both powerful and easy to use.
                Every feature is designed with your experience in mind.
              </p>
            </div>

            <div className="text-center">
              <div className="card-icon text-5xl mb-4 text-accent"><FiZap size={50} /></div>
              <h3 className="text-xl font-semibold mb-3 text-text">Continuous Innovation</h3>
              <p className="text-text">
                We're constantly improving and adding new features to help you
                better manage your subscriptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text mb-6">Meet Our Team</h2>
          <p className="text-xl text-text mb-12">
            The passionate people behind Subscription Manager
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary">
              <div className="card-icon text-4xl mb-4 text-accent"><FiCode size={40} /></div>
              <h3 className="text-lg font-semibold mb-2 text-text">Lalitha Ncana</h3>
              <p className="text-text mb-2">Founder & CEO</p>
              <p className="text-sm text-text">
                Former fintech entrepreneur with a passion for personal finance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary">
              <div className="card-icon text-4xl mb-4 text-accent"><FiEdit2 size={40} /></div>
              <h3 className="text-lg font-semibold mb-2 text-text">Lalitha Ncana</h3>
              <p className="text-text mb-2">Head of Design</p>
              <p className="text-sm text-text">
                UX designer focused on creating intuitive financial tools.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary">
              <div className="card-icon text-4xl mb-4 text-accent"><FiTool size={40} /></div>
              <h3 className="text-lg font-semibold mb-2 text-text">Lalitha Ncana</h3>
              <p className="text-text mb-2">Lead Developer</p>
              <p className="text-sm text-text">
                Full-stack developer with expertise in React and Node.js.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About