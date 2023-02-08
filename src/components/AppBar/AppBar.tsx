//  Icons
import YoutubeIcon from '@/components/images/YoutubeIcon'
import InstagramIcon from '@/components/images/InstagramIcon'
import FacebookIcon from '@/components/images/FacebookIcon'

const AppBar = () => {
  return (
    <header className="w-full font-Caveat justify-between flex items-center absolute top-4 px-16">
      <div className='text-7xl'>Logo</div>

      <div className='flex gap-6'>
        <FacebookIcon />
        <InstagramIcon />
        <YoutubeIcon />
      </div>
    </header>
  )
}

export default AppBar
