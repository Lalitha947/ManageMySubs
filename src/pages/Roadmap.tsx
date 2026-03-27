import { FiCalendar, FiTrendingUp, FiUsers, FiZap, FiCheckCircle, FiClock, FiStar, FiTarget } from 'react-icons/fi'

function Roadmap() {
  const roadmapPhases = [
    {
      phase: "Q1 2024",
      title: "Foundation & Core Features",
      status: "completed",
      items: [
        "Multi-platform subscription tracking",
        "Advanced analytics dashboard",
        "Email and push notifications",
        "Secure data encryption",
        "Mobile app launch"
      ]
    },
    {
      phase: "Q2 2024",
      title: "Advanced Analytics",
      status: "completed",
      items: [
        "Spending insights and trends",
        "Cost optimization recommendations",
        "Export and reporting features",
        "Integration with popular services",
        "Enhanced user interface"
      ]
    },
    {
      phase: "Q3 2024",
      title: "AI-Powered Features",
      status: "in-progress",
      items: [
        "Smart subscription recommendations",
        "Automated renewal alerts",
        "Price change detection",
        "Usage pattern analysis",
        "Personalized insights"
      ]
    },
    {
      phase: "Q4 2024",
      title: "Enterprise Solutions",
      status: "planned",
      items: [
        "Team collaboration features",
        "Advanced reporting for businesses",
        "API access for integrations",
        "Custom branding options",
        "Priority support"
      ]
    }
  ]

  const upcomingFeatures = [
    {
      icon: FiZap,
      title: "AI-Powered Insights",
      description: "Get personalized recommendations to optimize your subscription spending based on your usage patterns.",
      timeline: "Q3 2024",
      priority: "high"
    },
    {
      icon: FiUsers,
      title: "Family Sharing",
      description: "Share subscription access with family members while maintaining individual privacy and control.",
      timeline: "Q4 2024",
      priority: "high"
    },
    {
      icon: FiTrendingUp,
      title: "Advanced Analytics",
      description: "Deep dive into your subscription data with custom reports, forecasting, and trend analysis.",
      timeline: "Q3 2024",
      priority: "medium"
    },
    {
      icon: FiTarget,
      title: "Goal Tracking",
      description: "Set spending limits and savings goals with automated tracking and progress notifications.",
      timeline: "Q4 2024",
      priority: "medium"
    },
    {
      icon: FiCalendar,
      title: "Calendar Integration",
      description: "Sync renewal dates with your calendar and get reminders for important subscription events.",
      timeline: "Q3 2024",
      priority: "low"
    },
    {
      icon: FiStar,
      title: "Premium Features",
      description: "Unlock advanced features like unlimited subscriptions, priority support, and custom integrations.",
      timeline: "Q4 2024",
      priority: "medium"
    }
  ]

  const feedbackStats = [
    { label: "Features Requested", value: "500+", icon: FiTarget },
    { label: "User Surveys", value: "10K+", icon: FiUsers },
    { label: "Beta Testers", value: "2,500", icon: FiStar },
    { label: "Ideas Implemented", value: "85%", icon: FiCheckCircle }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-accent'
      case 'in-progress': return 'bg-secondary'
      case 'planned': return 'bg-primary'
      default: return 'bg-gray-400'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500'
      case 'medium': return 'text-yellow-500'
      case 'low': return 'text-green-500'
      default: return 'text-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Product Roadmap
          </h1>
          <p className="text-xl text-text max-w-2xl mx-auto">
            See what's coming next and how we're building the future of subscription management together.
          </p>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Development Timeline</h2>
            <p className="text-text">Our journey from launch to enterprise-ready platform</p>
          </div>

          <div className="space-y-8">
            {roadmapPhases.map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-secondary shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(phase.status)}`}></div>
                    <div>
                      <h3 className="text-xl font-bold text-text">{phase.phase}</h3>
                      <p className="text-text">{phase.title}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    phase.status === 'completed' ? 'bg-accent bg-opacity-10 text-accent' :
                    phase.status === 'in-progress' ? 'bg-secondary bg-opacity-10 text-secondary' :
                    'bg-primary bg-opacity-10 text-primary'
                  }`}>
                    {phase.status === 'completed' ? 'Completed' :
                     phase.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <FiCheckCircle className={`w-5 h-5 ${
                        phase.status === 'completed' ? 'text-accent' : 'text-gray-400'
                      }`} />
                      <span className={`text-sm ${
                        phase.status === 'completed' ? 'text-text' : 'text-gray-500'
                      }`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Upcoming Features</h2>
            <p className="text-text">Exciting new capabilities we're working on</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-secondary">
                <feature.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-bold text-text mb-3">{feature.title}</h3>
                <p className="text-text mb-4">{feature.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-medium">{feature.timeline}</span>
                  <span className={`text-sm font-medium ${getPriorityColor(feature.priority)}`}>
                    {feature.priority} priority
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Feedback Stats */}
      <section className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FiUsers className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Driven by User Feedback</h2>
            <p className="text-blue-100 text-lg">Your input shapes our product roadmap</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {feedbackStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Prioritize */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">How We Prioritize Features</h2>
            <p className="text-text">Our data-driven approach to product development</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <FiUsers className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text mb-3">User Research</h3>
              <p className="text-text">
                We conduct regular user interviews, surveys, and usability testing to understand your needs and pain points.
              </p>
            </div>

            <div className="text-center">
              <FiTrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text mb-3">Data Analysis</h3>
              <p className="text-text">
                Usage analytics and feature adoption metrics help us identify what features provide the most value.
              </p>
            </div>

            <div className="text-center">
              <FiTarget className="w-12 h-12 text-accent mx-auto mb-3" />
              <h3 className="text-xl font-bold text-text mb-3">Strategic Vision</h3>
              <p className="text-text">
                We balance user needs with our long-term vision to build a comprehensive subscription management platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Features */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FiStar className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-text mb-4">Have a Feature Request?</h2>
          <p className="text-text text-lg mb-8">
            Your ideas help shape our roadmap. Share your suggestions and vote on features you'd like to see.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-secondary transition-colors font-medium">
              Submit Feature Request
            </button>
            <button className="border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium">
              View Feature Requests
            </button>
          </div>
        </div>
      </section>

      {/* Beta Program */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl border border-secondary">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <FiClock className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-text mb-4">Join Our Beta Program</h3>
                <p className="text-text mb-6">
                  Get early access to new features and help us build the best subscription management tool.
                  Beta testers get exclusive features and direct input into our development process.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <FiCheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-text">Early access to new features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-text">Direct feedback to our team</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-text">Priority support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-text">Exclusive beta-only features</span>
                  </li>
                </ul>

                <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium">
                  Join Beta Program
                </button>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h4 className="font-semibold text-text mb-4">What Our Beta Users Say</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <p className="text-text italic mb-2">
                      "Being part of the beta program has been amazing. I've seen features I requested get implemented within weeks!"
                    </p>
                    <p className="text-sm text-gray-600">- Sarah M., Beta Tester</p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <p className="text-text italic mb-2">
                      "The team's responsiveness to feedback is incredible. They really listen to their users."
                    </p>
                    <p className="text-sm text-gray-600">- Mike R., Beta Tester</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Roadmap