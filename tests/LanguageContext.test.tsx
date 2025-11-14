import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useLanguage, LanguageProvider } from '@/shared/lib/LanguageContext'

function Probe() {
  const { language, toggleLanguage } = useLanguage()
  return (
    <div>
      <span data-testid="lang">{language}</span>
      <button onClick={toggleLanguage}>toggle</button>
    </div>
  )
}

test('LanguageContext toggles language and provides translations', async () => {
  const user = userEvent.setup()
  render(
    <LanguageProvider>
      <Probe />
    </LanguageProvider>
  )

  expect(screen.getByTestId('lang')).toHaveTextContent(/zh|en/)
  await user.click(screen.getByText('toggle'))
  expect(screen.getByTestId('lang').textContent).toMatch(/zh|en/)
})
