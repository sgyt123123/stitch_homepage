import { render, screen } from '@testing-library/react'
import { LanguageProvider } from '@/shared/lib/LanguageContext'
import { SolutionsContent } from '@/features/solutions/SolutionsContent'

test('SolutionsContent renders product cards with learn more buttons', () => {
  render(
    <LanguageProvider>
      <SolutionsContent />
    </LanguageProvider>
  )

  const learnMoreButtons = screen.getAllByText(/了解更多|Learn More/i)
  expect(learnMoreButtons.length).toBeGreaterThanOrEqual(4)
})
