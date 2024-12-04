import '../css/EmotionItem.css';
import { getEmotionImage } from '../util/get-emotion-image';

export const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ''}`}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} alt="" />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};