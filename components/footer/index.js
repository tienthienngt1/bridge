import { useSelector, shallowEqual } from 'react-redux'
import moment from 'moment'
import { FaHeart, FaDiscord } from 'react-icons/fa'
import { BsTwitter, BsTelegram, BsGithub, BsArrowRight } from 'react-icons/bs'

import Image from '../image'
import _package from '../../package.json'

export default () => {
  const {
    preferences,
  } = useSelector(
    state => (
      {
        preferences: state.preferences,
      }
    ),
    shallowEqual,
  )
  const {
    theme,
  } = { ...preferences }

  const {
    dependencies,
  } = { ..._package }

  return (
    <>
      {
        process.env.NEXT_PUBLIC_FEEDBACK_URL &&
        (
          <div className={`${theme} footer flex flex-col md:flex-row items-center space-y-2.5 sm:space-y-0 py-1 px-3`}>
            <div className="w-full md:w-2/2 lg:w-3/3 min-w-max flex items-center justify-center md:justify-end text-slate-400 dark:text-white space-x-1">
              <a
                href={process.env.NEXT_PUBLIC_FEEDBACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-500 space-x-1"
              >
                <span className="text-xs font-semibold">
                  Issues or feedback
                </span>
                <BsArrowRight
                  size={12}
                />
              </a>
            </div>
          </div>
        )
      }
      <div className={`${theme} footer flex flex-col md:flex-row items-center space-y-2.5 sm:space-y-0 p-3`}>
        <div className="w-full md:w-1/2 lg:w-1/3 min-w-max flex items-center justify-center md:justify-start font-medium space-x-2">
          <span>
            Built with
          </span>
          <a
            title="Build Cross-Chain Apps"
            href={process.env.NEXT_PUBLIC_PROTOCOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5"
          >
            <div className="min-w-max">
              <div className="flex dark:hidden items-center">
                <Image
                  src="/logos/logo.png"
                  width={20}
                  height={20}
                />
              </div>
              <div className="hidden dark:flex items-center">
                <Image
                  src="/logos/logo_white.png"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <span>
              Connext Protocol
            </span>
          </a>
          {
            dependencies?.['@connext/sdk'] &&
            (
              <a
                href="https://github.com/connext/monorepo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-white font-medium"
              >
                SDK v{dependencies['@connext/sdk'].replace('^', '')}
              </a>
            )
          }
        </div>
        <div className="hidden lg:flex w-full lg:w-1/3 flex-wrap items-center justify-center space-x-2">
          {
            process.env.NEXT_PUBLIC_TWITTER_USERNAME &&
            (
              <a
                href={`https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter
                  size={20}
                  className="text-blue-400 dark:text-white"
                />
              </a>
            )
          }
          {
            process.env.NEXT_PUBLIC_TELEGRAM_USERNAME &&
            (
              <a
                href={`https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTelegram
                  size={20}
                  className="text-blue-500 dark:text-white"
                />
              </a>
            )
          }
          {
            process.env.NEXT_PUBLIC_DISCORD_URL &&
            (
              <a
                href={process.env.NEXT_PUBLIC_DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord
                  size={20}
                  className="text-blue-600 dark:text-white"
                />
              </a>
            )
          }
          {
            process.env.NEXT_PUBLIC_GITHUB_URL &&
            (
              <a
                href={process.env.NEXT_PUBLIC_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub
                  size={20}
                  className="text-black dark:text-white"
                />
              </a>
            )
          }
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 min-w-max flex items-center justify-center md:justify-end text-slate-400 dark:text-white space-x-1">
          <span>
            © {moment().format('YYYY')} made with
          </span>
          <FaHeart
            className="text-red-400 text-xl pr-0.5"
          />
          <span>
            {"by "}
            <a
              href={process.env.NEXT_PUBLIC_BUILD_BY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-white font-semibold"
            >
              {process.env.NEXT_PUBLIC_BUILD_BY}
            </a>
            {" team."}
          </span>
        </div>
      </div>
    </>
  )
}