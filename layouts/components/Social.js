import {
  IoCall,
  IoGlobeOutline,
  IoLocation,
  IoLogoBehance,
  IoLogoBitbucket,
  IoLogoCodepen,
  IoLogoDiscord,
  IoLogoDribbble,
  IoLogoFacebook,
  IoLogoFoursquare,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoPinterest,
  IoLogoReddit,
  IoLogoRss,
  IoLogoSkype,
  IoLogoSlack,
  IoLogoSnapchat,
  IoLogoSoundcloud,
  IoLogoTiktok,
  IoLogoTumblr,
  IoLogoTwitter,
  IoLogoVimeo,
  IoLogoVk,
  IoLogoWhatsapp,
  IoLogoYoutube,
  IoMail,
} from "react-icons/io5";

const Social = ({ source, className }) => {
  const {
    facebook,
    twitter,
    instagram,
    youtube,
    linkedin,
    github,
    gitlab,
    discord,
    slack,
    medium,
    codepen,
    bitbucket,
    dribbble,
    behance,
    pinterest,
    soundcloud,
    tumblr,
    reddit,
    vk,
    whatsapp,
    snapchat,
    vimeo,
    tiktok,
    foursquare,
    rss,
    email,
    phone,
    address,
    skype,
    website,
  } = source;
  return (
    <ul className={className}>
      {facebook && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="facebook"
            href={facebook}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoFacebook size={20} />
          </a>
        </li>
      )}
      {twitter && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="twitter"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoTwitter size={20} />
          </a>
        </li>
      )}
      {instagram && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="instagram"
            href={instagram}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoInstagram size={20} />
          </a>
        </li>
      )}
      {youtube && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="youtube"
            href={youtube}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoYoutube size={20} />
          </a>
        </li>
      )}
      {linkedin && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="linkedin"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoLinkedin size={20} />
          </a>
        </li>
      )}
      {github && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="github"
            href={github}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoGithub size={20} />
          </a>
        </li>
      )}
      {gitlab && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="gitlab"
            href={gitlab}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoGitlab size={20} />
          </a>
        </li>
      )}
      {discord && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="discord"
            href={discord}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoDiscord size={20} />
          </a>
        </li>
      )}
      {slack && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="slack"
            href={slack}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoSlack size={20} />
          </a>
        </li>
      )}
      {medium && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="medium"
            href={medium}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoMedium size={20} />
          </a>
        </li>
      )}
      {codepen && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="codepen"
            href={codepen}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoCodepen size={20} />
          </a>
        </li>
      )}
      {bitbucket && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="bitbucket"
            href={bitbucket}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoBitbucket size={20} />
          </a>
        </li>
      )}
      {dribbble && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="dribbble"
            href={dribbble}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoDribbble size={20} />
          </a>
        </li>
      )}
      {behance && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="behance"
            href={behance}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoBehance size={20} />
          </a>
        </li>
      )}
      {pinterest && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="pinterest"
            href={pinterest}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoPinterest size={20} />
          </a>
        </li>
      )}
      {soundcloud && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="soundcloud"
            href={soundcloud}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoSoundcloud size={20} />
          </a>
        </li>
      )}
      {tumblr && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="tumblr"
            href={tumblr}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoTumblr size={20} />
          </a>
        </li>
      )}
      {reddit && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="reddit"
            href={reddit}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoReddit size={20} />
          </a>
        </li>
      )}
      {vk && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="vk"
            href={vk}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoVk size={20} />
          </a>
        </li>
      )}
      {whatsapp && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="whatsapp"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoWhatsapp size={20} />
          </a>
        </li>
      )}
      {snapchat && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="snapchat"
            href={snapchat}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoSnapchat size={20} />
          </a>
        </li>
      )}
      {vimeo && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="vimeo"
            href={vimeo}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoVimeo size={20} />
          </a>
        </li>
      )}
      {tiktok && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="tiktok"
            href={tiktok}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoTiktok size={20} />
          </a>
        </li>
      )}
      {foursquare && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="foursquare"
            href={foursquare}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoFoursquare size={20} />
          </a>
        </li>
      )}
      {skype && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="skype"
            href={skype}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoSkype size={20} />
          </a>
        </li>
      )}
      {website && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="website"
            href={website}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoGlobeOutline size={20} />
          </a>
        </li>
      )}
      {rss && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="rss feed"
            href={rss}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoRss size={20} />
          </a>
        </li>
      )}
      {email && (
        <li className="inline-block">
          <a aria-label="email" href={`mailto:${email}`}>
            className="rounded-full border-[1px] text-primary transition-all
            border-primary p-2 hover:bg-primary flex items-center justify-center
            hover:text-white"
            <IoMail />
          </a>
        </li>
      )}
      {phone && (
        <li className="inline-block">
          <a aria-label="telephone" href={`tel:${phone}`}>
            className="rounded-full border-[1px] text-primary transition-all
            border-primary p-2 hover:bg-primary flex items-center justify-center
            hover:text-white"
            <IoCall />
          </a>
        </li>
      )}
      {address && (
        <li className="inline-block">
          <a
            className="mr-3 flex items-center justify-center rounded-full border-[1px] border-primary p-4 text-primary transition-all hover:bg-primary hover:text-white"
            aria-label="location"
            href={address}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLocation size={20} />
          </a>
        </li>
      )}
    </ul>
  );
};

export default Social;
