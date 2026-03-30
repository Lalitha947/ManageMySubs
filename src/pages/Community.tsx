import { FiMessageSquare, FiUsers, FiTrendingUp, FiHeart, FiEye, FiCompass, FiStar, FiArrowRight, FiAlertCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Community() {
  const communityStats = [
    { label: 'Active Members', value: '12,500+', icon: FiUsers },
    { label: 'Discussions', value: '5,200+', icon: FiMessageSquare },
    { label: 'Helpful Tips Shared', value: '8,900+', icon: FiTrendingUp },
    { label: 'Community Answers', value: '94%', icon: FiHeart }
  ]

  const categories = [
    {
      icon: FiCompass,
      title: 'Getting Started',
      description: 'New to ManageMySubs? Find guides and tips to get the most out of your subscription tracking.',
      posts: 342,
      color: 'bg-blue-50'
    },
    {
      icon: FiTrendingUp,
      title: 'Money Saving Tips',
      description: 'Share and discover strategies for reducing subscription costs and finding better deals.',
      posts: 687,
      color: 'bg-green-50'
    },
    {
      icon: FiMessageSquare,
      title: 'Feature Requests',
      description: 'Suggest new features and vote on ideas from other community members.',
      posts: 541,
      color: 'bg-purple-50'
    },
    {
      icon: FiUsers,
      title: 'General Discussion',
      description: 'Connect with other users, share experiences, and help each other out.',
      posts: 1203,
      color: 'bg-orange-50'
    },
    {
      icon: FiAlertCircle,
      title: 'Bug Reports & Issues',
      description: 'Report technical issues and help us improve ManageMySubs.',
      posts: 218,
      color: 'bg-red-50'
    },
    {
      icon: FiStar,
      title: 'Success Stories',
      description: 'Share how ManageMySubs has helped you manage subscriptions better.',
      posts: 429,
      color: 'bg-yellow-50'
    }
  ]

  const recentDiscussions = [
    {
      id: 1,
      title: 'Best way to track annual subscriptions',
      author: 'Sarah M.',
      category: 'Getting Started',
      replies: 12,
      views: 342,
      likes: 28,
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      title: 'I saved $300 by using ManageMySubs!',
      author: 'John D.',
      category: 'Success Stories',
      replies: 8,
      views: 521,
      likes: 67,
      timeAgo: '4 hours ago'
    },
    {
      id: 3,
      title: 'Feature request: Custom spending limits',
      author: 'Alex R.',
      category: 'Feature Requests',
      replies: 24,
      views: 891,
      likes: 45,
      timeAgo: '6 hours ago'
    },
    {
      id: 4,
      title: 'Anyone else struggle with managing multiple services?',
      author: 'Emma L.',
      category: 'General Discussion',
      replies: 35,
      views: 1243,
      likes: 89,
      timeAgo: '8 hours ago'
    },
    {
      id: 5,
      title: 'Tips for organizing subscriptions by category',
      author: 'Mike T.',
      category: 'Money Saving Tips',
      replies: 18,
      views: 634,
      likes: 52,
      timeAgo: '10 hours ago'
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Getting Started': 'bg-blue-100 text-blue-700',
      'Money Saving Tips': 'bg-green-100 text-green-700',
      'Feature Requests': 'bg-purple-100 text-purple-700',
      'General Discussion': 'bg-orange-100 text-orange-700',
      'Success Stories': 'bg-yellow-100 text-yellow-700'
    }
    return colors[category] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FiMessageSquare className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Community
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Connect with thousands of ManageMySubs users, share tips, ask questions, and help each other save money.
          </p>

          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
            <span>Start Participating</span>
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-text">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Discussion Categories</h2>
            <p className="text-text max-w-2xl mx-auto">Browse conversations and join discussions that interest you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`${category.color} border border-secondary rounded-xl p-6 hover:shadow-lg transition cursor-pointer`}
              >
                <category.icon className="card-icon w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-text mb-2">{category.title}</h3>
                <p className="text-text text-sm mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-text">{category.posts} posts</span>
                  <FiArrowRight className="w-5 h-5 text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Recent Discussions</h2>
            <p className="text-text max-w-2xl mx-auto">Check out what the community is talking about right now.</p>
          </div>

          <div className="space-y-4">
            {recentDiscussions.map((discussion) => (
              <div
                key={discussion.id}
                className="bg-background rounded-xl border border-secondary p-6 hover:shadow-lg transition cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(discussion.category)}`}>
                        {discussion.category}
                      </span>
                      <span className="text-xs text-gray-500">{discussion.timeAgo}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-text mb-2 hover:text-primary transition">
                      {discussion.title}
                    </h3>
                    <p className="text-sm text-text">Started by <span className="font-medium">{discussion.author}</span></p>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-text">
                    <div className="text-center">
                      <div className="flex items-center gap-1 justify-center">
                        <FiMessageSquare className="w-4 h-4" />
                        <span className="font-medium">{discussion.replies}</span>
                      </div>
                      <div className="text-xs text-gray-500">replies</div>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center gap-1 justify-center">
                        <FiEye className="w-4 h-4" />
                        <span className="font-medium">{discussion.views}</span>
                      </div>
                      <div className="text-xs text-gray-500">views</div>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center gap-1 justify-center">
                        <FiHeart className="w-4 h-4" />
                        <span className="font-medium">{discussion.likes}</span>
                      </div>
                      <div className="text-xs text-gray-500">likes</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-medium">
              View All Discussions
            </button>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Community Guidelines</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FiStar className="w-5 h-5" />
                Be Respectful
              </h3>
              <p className="text-blue-100">
                Treat all community members with kindness and respect. We value diverse perspectives and encourage constructive conversations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FiStar className="w-5 h-5" />
                Stay On Topic
              </h3>
              <p className="text-blue-100">
                Keep discussions relevant to the category they're posted in. This helps everyone find exactly what they're looking for.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FiStar className="w-5 h-5" />
                No Spam or Ads
              </h3>
              <p className="text-blue-100">
                Don't post promotional content or spam. We're here to help each other, not to sell products or services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FiStar className="w-5 h-5" />
                Help Others
              </h3>
              <p className="text-blue-100">
                Share your knowledge and experience with the community. The best communities are built on mutual support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text mb-4">Ready to join the conversation?</h2>
          <p className="text-text text-lg mb-8">
            Sign in to your ManageMySubs account and start participating in the community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/faq"
              className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
            >
              Browse FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Community
