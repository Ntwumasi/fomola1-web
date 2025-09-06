'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MapPin, Package, Clock, CreditCard, ArrowRight } from 'lucide-react'

export default function SendPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    pickupAddress: '',
    pickupPhone: '',
    deliveryAddress: '',
    deliveryPhone: '',
    packageType: '',
    weight: '',
    deliveryType: 'standard',
    scheduledTime: '',
    notes: ''
  })
  const [fareEstimate, setFareEstimate] = useState<number | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Simulate fare calculation when addresses are filled
    if (field === 'deliveryAddress' && value && formData.pickupAddress) {
      // Mock fare calculation
      const baseFare = 15
      const distance = Math.random() * 10 + 2 // Mock distance
      const estimated = baseFare + (distance * 2)
      setFareEstimate(Math.round(estimated * 100) / 100)
    }
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const deliveryTypes = [
    { id: 'standard', name: 'Standard', time: '30-45 mins', price: 'Base Rate' },
    { id: 'express', name: 'Express', time: '15-25 mins', price: '+50% surcharge' },
    { id: 'scheduled', name: 'Scheduled', time: 'Choose time', price: 'Base Rate' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-secondary-900">Send a Package</h1>
            <span className="text-sm text-secondary-600">Step {step} of 4</span>
          </div>
          <div className="w-full bg-secondary-200 rounded-full h-2">
            <div 
              className="bg-primary-500 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Pickup & Delivery Addresses */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary-500" />
                <CardTitle>Pickup & Delivery Locations</CardTitle>
              </div>
              <CardDescription>Enter pickup and delivery addresses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-secondary-900">Pickup Location</h3>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Pickup Address *
                    </label>
                    <Input
                      placeholder="Enter pickup address"
                      value={formData.pickupAddress}
                      onChange={(e) => handleInputChange('pickupAddress', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Contact Phone *
                    </label>
                    <Input
                      placeholder="+233 XX XXX XXXX"
                      value={formData.pickupPhone}
                      onChange={(e) => handleInputChange('pickupPhone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-secondary-900">Delivery Location</h3>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Delivery Address *
                    </label>
                    <Input
                      placeholder="Enter delivery address"
                      value={formData.deliveryAddress}
                      onChange={(e) => handleInputChange('deliveryAddress', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Contact Phone *
                    </label>
                    <Input
                      placeholder="+233 XX XXX XXXX"
                      value={formData.deliveryPhone}
                      onChange={(e) => handleInputChange('deliveryPhone', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {fareEstimate && (
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                  <h4 className="font-semibold text-primary-800 mb-2">Estimated Fare</h4>
                  <p className="text-2xl font-bold text-primary-600">GH₵ {fareEstimate}</p>
                  <p className="text-sm text-primary-600">Final price may vary based on package details</p>
                </div>
              )}

              <div className="flex justify-end">
                <Button 
                  onClick={nextStep}
                  disabled={!formData.pickupAddress || !formData.deliveryAddress || !formData.pickupPhone || !formData.deliveryPhone}
                  className="flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Package Details */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-primary-500" />
                <CardTitle>Package Details</CardTitle>
              </div>
              <CardDescription>Tell us about your package</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Package Type *
                  </label>
                  <select 
                    className="w-full h-10 px-3 py-2 text-sm border border-secondary-300 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={formData.packageType}
                    onChange={(e) => handleInputChange('packageType', e.target.value)}
                  >
                    <option value="">Select package type</option>
                    <option value="documents">Documents</option>
                    <option value="food">Food</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Estimated Weight
                  </label>
                  <select 
                    className="w-full h-10 px-3 py-2 text-sm border border-secondary-300 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                  >
                    <option value="">Select weight range</option>
                    <option value="under-1kg">Under 1kg</option>
                    <option value="1-5kg">1-5kg</option>
                    <option value="5-10kg">5-10kg</option>
                    <option value="over-10kg">Over 10kg</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Special Instructions
                </label>
                <textarea 
                  className="w-full min-h-20 px-3 py-2 text-sm border border-secondary-300 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Any special handling instructions..."
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  rows={3}
                />
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  Previous
                </Button>
                <Button 
                  onClick={nextStep}
                  disabled={!formData.packageType}
                  className="flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Delivery Options */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary-500" />
                <CardTitle>Delivery Options</CardTitle>
              </div>
              <CardDescription>Choose when you want your package delivered</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {deliveryTypes.map((type) => (
                  <div 
                    key={type.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      formData.deliveryType === type.id 
                        ? 'border-primary-500 bg-primary-50' 
                        : 'border-secondary-200 hover:border-secondary-300'
                    }`}
                    onClick={() => handleInputChange('deliveryType', type.id)}
                  >
                    <h3 className="font-semibold text-secondary-900">{type.name}</h3>
                    <p className="text-sm text-secondary-600">{type.time}</p>
                    <p className="text-sm text-primary-600 font-medium">{type.price}</p>
                  </div>
                ))}
              </div>

              {formData.deliveryType === 'scheduled' && (
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Scheduled Time
                  </label>
                  <Input
                    type="datetime-local"
                    value={formData.scheduledTime}
                    onChange={(e) => handleInputChange('scheduledTime', e.target.value)}
                    min={new Date().toISOString().slice(0, 16)}
                  />
                </div>
              )}

              <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  Previous
                </Button>
                <Button 
                  onClick={nextStep}
                  disabled={formData.deliveryType === 'scheduled' && !formData.scheduledTime}
                  className="flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Payment & Confirmation */}
        {step === 4 && (
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-primary-500" />
                <CardTitle>Payment & Confirmation</CardTitle>
              </div>
              <CardDescription>Review your order and complete payment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Order Summary */}
              <div className="bg-secondary-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>From:</span>
                    <span className="font-medium">{formData.pickupAddress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>To:</span>
                    <span className="font-medium">{formData.deliveryAddress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Package:</span>
                    <span className="font-medium">{formData.packageType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Type:</span>
                    <span className="font-medium">{deliveryTypes.find(t => t.id === formData.deliveryType)?.name}</span>
                  </div>
                  {formData.scheduledTime && (
                    <div className="flex justify-between">
                      <span>Scheduled Time:</span>
                      <span className="font-medium">{new Date(formData.scheduledTime).toLocaleString()}</span>
                    </div>
                  )}
                  <div className="border-t pt-2 mt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span className="text-primary-600">GH₵ {fareEstimate}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-2 border-secondary-200 rounded-lg p-4">
                    <h4 className="font-medium text-secondary-900">Mobile Money</h4>
                    <p className="text-sm text-secondary-600">Pay with MTN, Vodafone Cash, or AirtelTigo Money</p>
                  </div>
                  <div className="border-2 border-secondary-200 rounded-lg p-4">
                    <h4 className="font-medium text-secondary-900">Card Payment</h4>
                    <p className="text-sm text-secondary-600">Pay with Visa, MasterCard, or local bank cards</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  Previous
                </Button>
                <Button size="lg" className="flex items-center space-x-2">
                  <span>Complete Order</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  )
}