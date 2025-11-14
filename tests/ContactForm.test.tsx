import { render, screen } from '@testing-library/react'
import { LanguageProvider } from '@/shared/lib/LanguageContext'
import { ContactContent } from '@/features/contact/ContactContent'

test('Contact section renders labels and topics placeholder', () => {
  render(
    <LanguageProvider>
      <ContactContent />
    </LanguageProvider>
  )

  // labels
  expect(screen.getByText(/姓名|Name/i)).toBeInTheDocument()
  expect(screen.getByText(/给我们留言|Leave us a message/i)).toBeInTheDocument()

  // topics placeholder appears at least once (placeholder or option)
  const topics = screen.getAllByText(/销售咨询|Sales Inquiry/i)
  expect(topics.length).toBeGreaterThan(0)
})
