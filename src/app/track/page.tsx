'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search, MapPin, Clock, Package, CheckCircle, Truck, Phone } from 'lucide-react'

export default function TrackPage() {
  const [trackingId, setTrackingId] = useState('')
  const [trackingData, setTrackingData] = useState<any>(null) // eslint-disable-line @typescript-eslint/no-explicit-any
  const [loading, setLoading] = useState(false)

  const handleTrack = async () => {
    if (!trackingId.trim()) return
    
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      // Mock tracking data
      setTrackingData({
        id: trackingId,
        status: 'in_transit',
        currentLocation: 'Osu, Accra',
        estimatedArrival: '15 mins',
        rider: {
          name: 'Kwame Asante',
          phone: '+233 XX XXX XXXX',
          rating: 4.8
        },
        timeline: [
          { status: 'order_placed', time: '10:30 AM', completed: true, description: 'Order placed and confirmed' },
          { status: 'rider_assigned', time: '10:35 AM', completed: true, description: 'Rider assigned - Kwame Asante' },
          { status: 'pickup_completed', time: '10:45 AM', completed: true, description: 'Package picked up from sender' },
          { status: 'in_transit', time: '10:50 AM', completed: true, description: 'Package is on the way to destination' },
          { status: 'delivered', time: 'Pending', completed: false, description: 'Package delivered to recipient' }
        ],
        package: {
          type: 'Documents',
          weight: 'Under 1kg',
          from: 'East Legon, Accra',
          to: 'Adabraka, Accra'
        }
      })
      setLoading(false)
    }, 1000)
  }

  // const getStatusColor = (status: string) => {
  //   switch (status) {
  //     case 'delivered': return 'text-green-600'
  //     case 'in_transit': return 'text-primary-600'
  //     case 'pickup_completed': return 'text-blue-600'
  //     case 'rider_assigned': return 'text-purple-600'
  //     default: return 'text-secondary-600'
  //   }
  // }

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <CheckCircle className="h-5 w-5 text-green-600" />
    }
    
    switch (status) {
      case 'in_transit': return <Truck className="h-5 w-5 text-primary-600" />
      case 'delivered': return <Package className="h-5 w-5 text-secondary-400" />
      default: return <Clock className="h-5 w-5 text-secondary-400" />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">Track Your Package</h1>
          <p className="text-lg text-secondary-600">
            Enter your tracking ID to see real-time updates on your delivery
          </p>
        </div>

        {/* Track Input */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Enter tracking ID (e.g., FOM123456)"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
                />
              </div>
              <Button 
                onClick={handleTrack}
                disabled={loading || !trackingId.trim()}
                className="flex items-center space-x-2"
              >
                <Search className="h-4 w-4" />
                <span>{loading ? 'Tracking...' : 'Track Package'}</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tracking Results */}
        {trackingData && (
          <div className="space-y-6">
            {/* Status Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-primary-500" />
                  <span>Package #{trackingData.id}</span>
                </CardTitle>
                <CardDescription>
                  {trackingData.package.type} • {trackingData.package.weight}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary-500" />
                    <div>
                      <p className="text-sm text-secondary-600">Current Location</p>
                      <p className="font-semibold text-secondary-900">{trackingData.currentLocation}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary-500" />
                    <div>
                      <p className="text-sm text-secondary-600">Estimated Arrival</p>
                      <p className="font-semibold text-secondary-900">{trackingData.estimatedArrival}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-primary-500" />
                    <div>
                      <p className="text-sm text-secondary-600">Rider</p>
                      <p className="font-semibold text-secondary-900">{trackingData.rider.name}</p>
                      <p className="text-sm text-secondary-600">⭐ {trackingData.rider.rating}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Route Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Live Map</CardTitle>
                <CardDescription>Real-time location tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
                    <p className="text-secondary-600">Interactive map will be displayed here</p>
                    <p className="text-sm text-secondary-500 mt-2">
                      From: {trackingData.package.from}
                    </p>
                    <p className="text-sm text-secondary-500">
                      To: {trackingData.package.to}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Timeline</CardTitle>
                <CardDescription>Track your package&apos;s journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingData.timeline.map((item: any) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
                    <div key={item.status} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        {getStatusIcon(item.status, item.completed)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium ${item.completed ? 'text-secondary-900' : 'text-secondary-500'}`}>
                          {item.description}
                        </p>
                        <p className={`text-xs mt-1 ${item.completed ? 'text-secondary-600' : 'text-secondary-400'}`}>
                          {item.time}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        {item.completed && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Completed
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Rider */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Your Rider</CardTitle>
                <CardDescription>Need to reach your delivery rider?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Call {trackingData.rider.name}</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <span>💬</span>
                    <span>Send Message</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Sample Tracking IDs */}
        {!trackingData && (
          <Card>
            <CardHeader>
              <CardTitle>Don&apos;t have a tracking ID?</CardTitle>
              <CardDescription>Try these sample tracking IDs to see the tracking feature in action</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['FOM123456', 'FOM789012', 'FOM345678'].map((id) => (
                  <Button 
                    key={id}
                    variant="outline" 
                    onClick={() => {
                      setTrackingId(id)
                      setTimeout(handleTrack, 100)
                    }}
                    className="text-left"
                  >
                    Try {id}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  )
}