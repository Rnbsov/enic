'use client'
import React, { useState, useRef } from 'react'
import { FileText, Upload, Clock, CheckCircle, Paperclip, X, Shield } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Label } from '@/components/ui/label'
import HCaptcha from '@hcaptcha/react-hcaptcha'

const OnlineApplications = () => {
  const t = useTranslations('applications')
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<HCaptcha>(null)

  const applicationTypes = [
    {
      id: 'diploma-recognition',
      title: t('diplomaRecognition.title'),
      description: t('diplomaRecognition.description'),
      icon: FileText,
      status: 'available',
    },
    {
      id: 'program-accreditation',
      title: t('programAccreditation.title'),
      description: t('programAccreditation.description'),
      icon: CheckCircle,
      status: 'available',
    },
    {
      id: 'status-inquiry',
      title: t('statusInquiry.title'),
      description: t('statusInquiry.description'),
      icon: Clock,
      status: 'available',
    },
  ]

  const steps = [
    { step: 1, title: t('steps.step1.title'), description: t('steps.step1.description') },
    { step: 2, title: t('steps.step2.title'), description: t('steps.step2.description') },
    { step: 3, title: t('steps.step3.title'), description: t('steps.step3.description') },
    { step: 4, title: t('steps.step4.title'), description: t('steps.step4.description') },
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setSelectedFiles((prev) => [...prev, ...files])
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleApplicationClick = (appId: string) => {
    setSelectedApplication(appId)
  }

  return (
    <section className="py-16 bg-gray-50" id="online-applications">
      <div className="container mx-auto px-4">
        {' '}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('description')}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Application Types */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {t('availableApplications')}
            </h3>
            <div className="space-y-4">
              {applicationTypes.map((app) => (
                <div
                  key={app.id}
                  className={`bg-white p-6 rounded-xl shadow-sm border transition-all duration-300 cursor-pointer group ${
                    selectedApplication === app.id
                      ? 'border-brand-blue-500 shadow-md ring-2 ring-brand-blue-100'
                      : 'border-gray-100 hover:shadow-md'
                  }`}
                  onClick={() => handleApplicationClick(app.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg transition-colors duration-300 ${
                        selectedApplication === app.id
                          ? 'bg-brand-blue-500 text-white'
                          : 'bg-brand-blue-100 text-brand-blue-600 group-hover:bg-brand-blue-200'
                      }`}
                    >
                      <app.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 mb-2">{app.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{app.description}</p>{' '}
                      {selectedApplication === app.id ? (
                        <span className="text-brand-blue-600 font-medium text-sm">
                          {t('selected')}
                        </span>
                      ) : (
                        <button className="text-brand-blue-600 hover:text-brand-blue-700 font-medium text-sm">
                          {t('selectApplication')}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* File Upload Section */}
            {selectedApplication && (
              <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                {' '}
                <h4 className="font-medium text-gray-800 mb-4 flex items-center">
                  <Paperclip className="w-5 h-5 mr-2 text-brand-blue-600" />
                  {t('attachDocuments')}
                </h4>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-brand-blue-400 transition-colors duration-200">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />{' '}
                  <label className="cursor-pointer">
                    <span className="text-brand-blue-600 hover:text-brand-blue-700 font-medium">
                      {t('browseFiles')}
                    </span>
                    <span className="text-gray-500 block text-sm mt-1">{t('uploadFiles')}</span>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
                {/* Selected Files List */}
                {selectedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h5 className="font-medium text-gray-700 text-sm">{t('uploadedFiles')}</h5>
                    {selectedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                      >
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700 truncate">{file.name}</span>
                          <span className="text-xs text-gray-500">
                            ({Math.round(file.size / 1024)} KB)
                          </span>
                        </div>{' '}
                        <button
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 p-1"
                          title={t('removeFile')}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}{' '}
                  </div>
                )}
                {/* hCaptcha */}
                <div className="space-y-2 mt-5">
                  <Label className="text-gray-700 font-medium flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-brand-blue-500" />
                    Security Verification
                  </Label>
                  <div className="flex justify-center">
                    <HCaptcha
                      ref={captchaRef}
                      sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || ''}
                      onVerify={(token) => setCaptchaToken(token)}
                      onExpire={() => setCaptchaToken(null)}
                      onError={() => setCaptchaToken(null)}
                      theme="light"
                    />
                  </div>
                </div>
                <button className="w-full mt-6 bg-brand-blue-600 text-white py-3 px-6 rounded-lg hover:bg-brand-blue-700 transition-colors duration-200 font-medium">
                  {t('submitApplication')}
                </button>
              </div>
            )}
          </div>

          {/* Process Steps */}
          <div>
            {' '}
            <h3 className="text-xl font-semibold text-gray-800 mb-6">{t('applicationProcess')}</h3>
            <div className="space-y-6">
              {steps.map((step, _index) => (
                <div key={step.step} className="flex items-start space-x-4">
                  <div className="bg-brand-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>{' '}
            <div className="mt-8 p-6 bg-brand-light-blue-50 rounded-xl border border-brand-light-blue-200">
              <h4 className="font-medium text-brand-blue-800 mb-2">{t('documentRequirements')}</h4>
              <ul className="text-sm text-brand-blue-700 space-y-1">
                <li>• {t('fileFormat')}</li>
                <li>• {t('maxSize')}</li>
                <li>• {t('scanQuality')}</li>
                <li>• {t('readableDocuments')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnlineApplications
