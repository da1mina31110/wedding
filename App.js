import React from 'react';
import './App.css';
import image01 from './jpg/whiterose.jpg';
import image02 from './jpg/welcomicon.png';
import image03 from './jpg/introductionicon.png';
import image04 from './jpg/ceremonyicon.png';
import image05 from './jpg/partyicon.png';
import image06 from './jpg/thankyouicon.png';
import image07 from './jpg/men.png';
import image08 from './jpg/lady.png';
import { ActionAreaCard } from './card';

const App = () => {
	return (
		<div className="allWrapper">
			<div className="topWrapper">
			<img src={image01} alt="whiterose" className="top"/>
        	<p className="onImageText">Wedding Ceremony</p>
        	</div>
        	<div className="sectionWrapper">
        	  <p className="sectionTitle">Greeting</p>
        	  <div className="sectionWrapper">
        	    <p className="greetingText">
        		本日はご多忙のところ わたしたちの式にご出席いただき
				<br />
				誠にありがとうございます
				<br />
				大切な皆様と今日のこの良き日を過ごせることに
				<br />
				喜びと 感謝の思いでいっぱいです
				<br />
				まだまだ未熟なわたしたちですが
				<br />
				二人で支え合い 認め合い 笑い合いながら
				<br />
				温かい家庭を築いてまいります
				<br />
				今後とも温かく見守っていただければ幸いです
				<br />
				わずかな時間ではございますが
				<br />
				どうぞ楽しい時間をお過ごしください
				</p>
			  </div>			  
			</div>
			<div className="sectionWrapper">
				<p className="timelineTitle">Timeline</p>
				<div className="timeline">
					<img src={image02} alt="welcome" className="icon"/>
					<p className="timelineText">
					　受付　
					<br />
					10:00</p>
				</div>
				<div className="timeline">
					<img src={image03} alt="introduction" className="icon"/>
					<p className="timelineText">
					親族紹介
					<br />
					11:45</p>
				</div>
				<div className="timeline">
					<img src={image04} alt="ceremony" className="icon"/>
					<p className="timelineText">
					　挙式　
					<br />
					12:30</p>
				</div>
				<div className="timeline">
					<img src={image05} alt="party" className="icon"/>
					<p className="timelineText">
					　食事会　
					<br />
					14:00</p>
				</div>
				<div className="timeline">
					<img src={image06} alt="thankyou" className="icon"/>
					<p className="timelineText">
					おひらき
					<br />
					16:00</p>
				</div>
			</div>
			<div className="sectionWrapper">
			<p className="sectionTitle">Profile</p>
				<div className="profileimg">
						<img src={image07} alt="men" className="couple"/>
						<img src={image08} alt="lady" className="couple"/>
				</div>
				<div className="profile">
					<p className="fovorText">
						新郎　　　　　　　　　　　　新婦
						<br />
						1997年1月18日　　<b>生年月日</b>　　1996年7月22日
						<br />
						O型　　　　<b>血液型</b>　　　　O型
						<br />
						やぎ座　　　　<b>星座</b>　　　　かに座
						<br />
						　公務員　　　　<b>職業</b>　　　エンジニア
						<br />
						ライブに行く　　<b>趣味</b>　　　　　旅行　
						<br />
						　　　焼肉　　　<b>好きな食べ物</b>　　チョコレート
						
					</p>
				</div>
			</div>
			<p className="sectionTitle">The Groom's Family</p>
			<ActionAreaCard />
			<p className="sectionTitle">The Bride's Family</p>
    	</div>
		
	);
}
export default App;
