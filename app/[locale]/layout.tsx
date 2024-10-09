//~ import {Suspense} from 'react'
import {UserState} from '../../context/user/UserState'
import {SeedState} from '../../context/seeds/SeedState'
import {QueryState} from '../../context/queries/QueryState'
import {ItemState} from '../../context/items/ItemState'
import {CartState} from '../../context/cart/CartState'

import { Lora } from 'next/font/google'
import {Header} from '../../comps/Header/Header'
import {GlobalStyle} from './extra.styled'
import StyledComponentsRegistry from './registry';
import {Russo_One} from 'next/font/google'

import {notFound} from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import {unstable_setRequestLocale} from 'next-intl/server'
import {Metadata} from 'next'

const lora = Russo_One({ subsets: ['cyrillic'], weight: ['400'] })
//~ import {useLocale} from 'next-intl'

const locales = ['en', 'ua', 'ru']

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}
//~ const lora = Lora({ subsets: ['latin'] })
//~ const lora = Yeseva_One({subsets: ['cyrillic'], weight: '400' })
export const metadata : Metadata = {
  title: 'Flora Izyum',
  description: 'Do not 12 13 14 15',
  icons: {
    icon: "/logo.png",
  },
    metadataBase: new URL('https://flora-izyum.vercel.app/en/seed-list'),

}

export default async function RootLayout({ children, params: {locale}}) {
let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    console.error('Failed to load messages:', error);
    notFound()
  }
 //~ if (!locales.includes(locale)) notFound();
   unstable_setRequestLocale(locale)
  return (
  <html lang={locale}>
    <body className={lora.className}>
      <NextIntlClientProvider locale={locale} messages={messages}>
     <StyledComponentsRegistry>
      <GlobalStyle/>
       <SeedState>
       <ItemState>
       <UserState>
       <CartState>
       <QueryState>
        <Header />
          {children}
      </QueryState>
      </CartState>
      </UserState>
      </ItemState>
      </SeedState>
     </StyledComponentsRegistry>
      </NextIntlClientProvider>
    </body>
   </html>
  )
}
