
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const loggedIn = { firstName: 'Rahni', lastName: 'De-Meis',
    email: 'contact@gmail.com'
   }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting"
            title="Welcome"
            user={loggedIn.firstName || 'Guest'}
            subtext="Manage your account and transactions efficiently." />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1490.21} />
        </header>
        {/* Recent transactions */}
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 108}, {currentBalance: 206}]}
      />
    </section>
  )
}

export default Home