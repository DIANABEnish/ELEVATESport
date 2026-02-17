// ScrollToTop.ts - קובץ עם פונקציות גלילה מתקדמות בTypeScript

/**
 * מילון של פונקציות איזון (easing functions) שונות
 */
type EasingFunction = (t: number) => number;
type EasingFunctionName = 'linear' | 'easeInOutSine' | 'easeInOutCubic' | 'easeOutQuart' | 'easeOutElastic';

const easings: Record<EasingFunctionName, EasingFunction> = {
  // ליניארי - מהירות קבועה
  linear: (t: number): number => t,
  
  // איזון סינוס - חלק מאוד
  easeInOutSine: (t: number): number => -(Math.cos(Math.PI * t) - 1) / 2,
  
  // איזון קוביקלי - התחלה וסיום איטיים, אמצע מהיר
  easeInOutCubic: (t: number): number => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  
  // איזון קוורץ - חלק מאוד עם האטה בסוף
  easeOutQuart: (t: number): number => 1 - Math.pow(1 - t, 4),
  
  // איזון אלסטי - אפקט קפיצי קל בסוף
  easeOutElastic: (t: number): number => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};

/**
 * פונקציה שגוללת לראש העמוד עם אנימציה חלקה ומותאמת אישית
 * @param duration - משך האנימציה במילישניות (ברירת מחדל: 1000)
 * @param easing - פונקציית האיזון לאנימציה (ברירת מחדל: 'easeInOutCubic')
 */
export const scrollToTop = (
  duration: number = 1000, 
  easing: EasingFunctionName = 'easeInOutCubic'
): void => {
  // מיקום נוכחי בעמוד
  const startPosition: number = window.pageYOffset;
  const startTime: number = performance.now();
  
  // פונקציית האנימציה
  const animateScroll = (currentTime: number): void => {
    const elapsedTime: number = currentTime - startTime;
    
    // חישוב ההתקדמות (בין 0 ל-1)
    const progress: number = Math.min(elapsedTime / duration, 1);
    
    // חישוב המיקום החדש עם פונקציית האיזון
    const easedProgress: number = easings[easing](progress);
    
    // גלילה למיקום המחושב
    window.scrollTo(0, startPosition * (1 - easedProgress));
    
    // המשך האנימציה אם עוד לא הסתיימה
    if (progress < 1) {
      window.requestAnimationFrame(animateScroll);
    }
  };
  
  // התחלת האנימציה
  window.requestAnimationFrame(animateScroll);
};

/**
 * פונקציה לגלילה לאלמנט ספציפי עם אנימציה חלקה
 * @param elementId - מזהה האלמנט אליו יש לגלול
 * @param duration - משך האנימציה במילישניות
 * @param offset - מרחק מעל האלמנט (שולי בטיחות)
 */
export const scrollToElement = (
  elementId: string, 
  duration: number = 1000, 
  offset: number = 0
): void => {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const elementPosition: number = element.getBoundingClientRect().top;
  const startPosition: number = window.pageYOffset;
  const targetPosition: number = startPosition + elementPosition - offset;
  
  const startTime: number = performance.now();
  
  const animateScrollToElement = (currentTime: number): void => {
    const elapsedTime: number = currentTime - startTime;
    const progress: number = Math.min(elapsedTime / duration, 1);
    const easedProgress: number = -(Math.cos(Math.PI * progress) - 1) / 2;
    
    window.scrollTo(0, startPosition + (targetPosition - startPosition) * easedProgress);
    
    if (progress < 1) {
      window.requestAnimationFrame(animateScrollToElement);
    }
  };
  
  window.requestAnimationFrame(animateScrollToElement);
};