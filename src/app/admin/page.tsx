'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Users, 
  Package, 
  Truck, 
  DollarSign, 
  TrendingUp, 
  AlertCircle,
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  MoreHorizontal
} from 'lucide-react'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data
  const stats = {
    totalRiders: 524,
    activeRiders: 187,
    totalDeliveries: 12543,
    todayDeliveries: 89,
    totalRevenue: 45230,
    todayRevenue: 1245,
    pendingVerifications: 23,
    activeComplaints: 7
  }

  const recentDeliveries = [
    { id: 'FOM123456', status: 'delivered', rider: 'Kwame Asante', amount: 25, time: '2 mins ago' },
    { id: 'FOM123457', status: 'in_transit', rider: 'Ama Serwah', amount: 30, time: '5 mins ago' },
    { id: 'FOM123458', status: 'pickup_completed', rider: 'Kofi Mensah', amount: 20, time: '8 mins ago' },
    { id: 'FOM123459', status: 'rider_assigned', rider: 'Akua Boateng', amount: 35, time: '12 mins ago' },
  ]

  const pendingRiders = [
    { id: 1, name: 'John Doe', phone: '+233 XX XXX XXXX', documents: 4, submitted: '2 hours ago' },
    { id: 2, name: 'Mary Johnson', phone: '+233 XX XXX XXXX', documents: 3, submitted: '1 day ago' },
    { id: 3, name: 'David Wilson', phone: '+233 XX XXX XXXX', documents: 4, submitted: '2 days ago' },
  ]

  const getStatusBadge = (status: string) => {
    const colors = {
      delivered: 'bg-green-100 text-green-800',
      in_transit: 'bg-blue-100 text-blue-800',
      pickup_completed: 'bg-yellow-100 text-yellow-800',
      rider_assigned: 'bg-purple-100 text-purple-800'
    }
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const formatStatus = (status: string) => {
    return status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-primary-500 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-secondary-900">
                Fomola1 Admin
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-secondary-600">Welcome, Admin</span>
              <Button variant="outline" size="sm">Logout</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview' },
              { id: 'deliveries', name: 'Deliveries' },
              { id: 'riders', name: 'Riders' },
              { id: 'verification', name: 'Verification' },
              { id: 'analytics', name: 'Analytics' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Riders</CardTitle>
                  <Users className="h-4 w-4 text-secondary-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalRiders}</div>
                  <p className="text-xs text-secondary-600">
                    {stats.activeRiders} active today
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Deliveries</CardTitle>
                  <Package className="h-4 w-4 text-secondary-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalDeliveries.toLocaleString()}</div>
                  <p className="text-xs text-secondary-600">
                    {stats.todayDeliveries} today
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-secondary-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">GH₵ {stats.totalRevenue.toLocaleString()}</div>
                  <p className="text-xs text-secondary-600">
                    GH₵ {stats.todayRevenue} today
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Actions</CardTitle>
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.pendingVerifications}</div>
                  <p className="text-xs text-secondary-600">
                    Rider verifications
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Deliveries</CardTitle>
                  <CardDescription>Latest delivery activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentDeliveries.map((delivery) => (
                      <div key={delivery.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div>
                            <p className="text-sm font-medium text-secondary-900">{delivery.id}</p>
                            <p className="text-sm text-secondary-600">{delivery.rider}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(delivery.status)}`}>
                            {formatStatus(delivery.status)}
                          </span>
                          <p className="text-sm text-secondary-600 mt-1">GH₵ {delivery.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pending Verifications</CardTitle>
                  <CardDescription>Riders awaiting document approval</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingRiders.map((rider) => (
                      <div key={rider.id} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-secondary-900">{rider.name}</p>
                          <p className="text-sm text-secondary-600">{rider.documents} documents • {rider.submitted}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Deliveries Tab */}
        {activeTab === 'deliveries' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>All Deliveries</CardTitle>
                    <CardDescription>Manage and monitor all delivery orders</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-secondary-400" />
                      <Input placeholder="Search deliveries..." className="pl-9" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-secondary-700 uppercase bg-secondary-50">
                      <tr>
                        <th className="px-6 py-3">Order ID</th>
                        <th className="px-6 py-3">Rider</th>
                        <th className="px-6 py-3">Route</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Amount</th>
                        <th className="px-6 py-3">Time</th>
                        <th className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentDeliveries.map((delivery) => (
                        <tr key={delivery.id} className="bg-white border-b hover:bg-secondary-50">
                          <td className="px-6 py-4 font-medium text-secondary-900">{delivery.id}</td>
                          <td className="px-6 py-4">{delivery.rider}</td>
                          <td className="px-6 py-4">Osu → Adabraka</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(delivery.status)}`}>
                              {formatStatus(delivery.status)}
                            </span>
                          </td>
                          <td className="px-6 py-4">GH₵ {delivery.amount}</td>
                          <td className="px-6 py-4">{delivery.time}</td>
                          <td className="px-6 py-4">
                            <Button variant="outline" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Riders Tab */}
        {activeTab === 'riders' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Rider Management</CardTitle>
                    <CardDescription>View and manage all registered riders</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-secondary-400" />
                      <Input placeholder="Search riders..." className="pl-9" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Kwame Asante', status: 'active', rating: 4.8, deliveries: 234, joined: '2 months ago' },
                    { name: 'Ama Serwah', status: 'active', rating: 4.9, deliveries: 189, joined: '1 month ago' },
                    { name: 'Kofi Mensah', status: 'offline', rating: 4.6, deliveries: 156, joined: '3 weeks ago' },
                  ].map((rider, index) => (
                    <Card key={index} className="border-2">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-secondary-900">{rider.name}</h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            rider.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {rider.status}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Rating:</span>
                            <span>⭐ {rider.rating}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Deliveries:</span>
                            <span>{rider.deliveries}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Joined:</span>
                            <span>{rider.joined}</span>
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-2">
                          <Button size="sm" variant="outline" className="flex-1">View</Button>
                          <Button size="sm" className="flex-1">Contact</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Verification Tab */}
        {activeTab === 'verification' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Document Verification</CardTitle>
                <CardDescription>Review and approve rider documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingRiders.map((rider) => (
                    <Card key={rider.id} className="border-2">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-secondary-900">{rider.name}</h3>
                            <p className="text-sm text-secondary-600">{rider.phone}</p>
                            <p className="text-sm text-secondary-600">Submitted {rider.submitted}</p>
                          </div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Pending Review
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-secondary-100 rounded-lg mb-2 mx-auto"></div>
                            <p className="text-xs text-secondary-600">ID Card</p>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-secondary-100 rounded-lg mb-2 mx-auto"></div>
                            <p className="text-xs text-secondary-600">License</p>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-secondary-100 rounded-lg mb-2 mx-auto"></div>
                            <p className="text-xs text-secondary-600">Photo</p>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-secondary-100 rounded-lg mb-2 mx-auto"></div>
                            <p className="text-xs text-secondary-600">Bike Papers</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" className="flex-1">
                            <XCircle className="h-4 w-4 mr-2" />
                            Reject
                          </Button>
                          <Button className="flex-1">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Approve
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary-500" />
                    <span>Revenue Trend</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <p className="text-secondary-600">Revenue chart placeholder</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Routes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { route: 'Osu → Adabraka', count: 45 },
                      { route: 'East Legon → Airport', count: 38 },
                      { route: 'Tema → Accra Central', count: 32 }
                    ].map((route, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-secondary-700">{route.route}</span>
                        <span className="text-sm font-semibold text-primary-600">{route.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-secondary-700">Avg. Delivery Time</span>
                      <span className="text-sm font-semibold">28 mins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-secondary-700">Success Rate</span>
                      <span className="text-sm font-semibold text-green-600">96.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-secondary-700">Customer Rating</span>
                      <span className="text-sm font-semibold">4.7 ⭐</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}