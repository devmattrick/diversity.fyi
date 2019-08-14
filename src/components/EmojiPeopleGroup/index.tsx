import { Component, ComponentChild, h } from 'preact';

const SEXES = ['\u{1F468}', '\u{1F469}'];
const SKIN_TONES = ['\u{1F3FB}', '\u{1F3FC}', '\u{1F3FD}', '\u{1F3FE}', '\u{1F3FF}'];
const ZWJ = '\u{200D}';
const LAPTOP = '\u{1F4BB}';

class EmojiPeopleGroup extends Component {
  public render(): ComponentChild {
    // Get 3 random emojis
    let randomEmojis = '';
    for (let i = 0; i < 3; i++) {
      randomEmojis += this.randomEmoji();
    }

    return <span>{randomEmojis}</span>;
  }

  private randomEmoji(): string {
    const randomSex = SEXES[Math.floor(Math.random() * SEXES.length)];
    const randomSkinTone = SKIN_TONES[Math.floor(Math.random() * SKIN_TONES.length)];

    return `${randomSex}${randomSkinTone}${ZWJ}${LAPTOP}`;
  }
}

export default EmojiPeopleGroup;
export { EmojiPeopleGroup };
