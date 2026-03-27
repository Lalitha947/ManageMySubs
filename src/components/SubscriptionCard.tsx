import type { Subscription } from '../types'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

interface SubscriptionCardProps {
  subscription: Subscription
  onEdit: (subscription: Subscription) => void
  onDelete: (id: string) => void
}

function SubscriptionCard({ subscription, onEdit, onDelete }: SubscriptionCardProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      entertainment: 'bg-purple-100 text-purple-800',
      productivity: 'bg-blue-100 text-secondary',
      health: 'bg-green-100 text-green-800',
      finance: 'bg-yellow-100 text-yellow-800',
      general: 'bg-background text-text'
    }
    return colors[category as keyof typeof colors] || colors.general
  }

  const nextPaymentDate = new Date(subscription.nextPaymentDate)
  const today = new Date()
  const daysUntilPayment = Math.ceil((nextPaymentDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  const reminderWindow = subscription.reminderEnabled ? subscription.reminderDaysBefore : -1
  const isUrgent = subscription.reminderEnabled && daysUntilPayment <= reminderWindow && daysUntilPayment >= 0

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text mb-1">{subscription.name}</h3>
          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(subscription.category)}`}>
            {subscription.category}
          </span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(subscription)}
            className="text-primary hover:text-secondary p-1"
            title="Edit subscription"
          >
            <FiEdit2 className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(subscription._id)}
            className="text-red-600 hover:text-red-800 p-1"
            title="Delete subscription"
          >
            <FiTrash2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-text">Cost:</span>
          <span className="font-semibold text-lg">${subscription.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-text">Frequency:</span>
          <span className="capitalize">{subscription.frequency}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-text">Next Payment:</span>
          <span className={`font-medium ${isUrgent ? 'text-red-600' : 'text-text'}`}>
            {nextPaymentDate.toLocaleDateString()}
            {isUrgent && <span className="ml-1 text-xs">(Reminder: due in {daysUntilPayment} day{daysUntilPayment === 1 ? '' : 's'})</span>}
          </span>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionCard