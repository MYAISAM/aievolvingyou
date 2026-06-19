import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const greenLight = "#edf4f2";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

export default function ArticleLongGap() {
  return (
    <ArticleLayout
      bucket="Interview prep"
      title="I hadn't interviewed in over 10 years. Here's what I had to relearn."
    >
      <p>I spent over a decade in talent and recruitment. I coached candidates through interview processes. I sat on hiring panels. I knew, intellectually, exactly what good interview performance looked like.</p>

      <p>And then I had to interview again myself.</p>

      <p>I will not pretend it was not uncomfortable. There is a particular kind of humbling that comes from knowing the theory perfectly and then discovering that knowing and doing are very different things. I had spent years telling candidates what to do. When it was my turn, I found out how much of that advice is easier to give than to take.</p>

      <p>If you have not interviewed in a long time, whether that is five years, ten years, or more, this article is for you. Not the version of you that needs to be told to research the company and dress appropriately. The version of you that is genuinely capable, has real experience to draw on, and is struggling to translate that into the language of a modern interview process.</p>

      {/* TRIMMED: "What's different now" section replaced with cross-reference */}
      <h2>What is different now</h2>

      <p>The mechanics of how CVs are read and applications sorted have changed considerably in recent years. If you are returning after a gap, the first five articles in this library cover those changes in detail: how ATS systems actually work, how AI screening tools operate, how to tell when they are being used on you, and how to write a CV for both machine and human readers. For the purposes of this article, the important point is this: the gap itself is not the problem it used to be. Visibility and specificity matter more. And behavioural interviewing, "tell me about a time when...", is now the norm at most organisations above a certain size. If you are not prepared for it specifically, you will find yourself telling a good story that does not quite answer the question.</p>

      <h2>The thing nobody talks about, the confidence gap</h2>

      <p>When you have been in a role for a long time, particularly a senior one, you stop having to prove yourself. Your reputation does a lot of the work. The idea of having to walk into a room and make a case for yourself from scratch, to people who have no context for who you are, feels strange. Almost undignified.</p>

      <p>That feeling is completely normal. And it is also not useful.</p>

      <p>The interview process does not care about your internal reputation or the relationships you have built over a decade. It only sees what you put in front of it. That is not unfair, it is just the nature of the process. And the sooner you make peace with that, the sooner you can focus on doing it well rather than resenting having to do it at all.</p>

      <p>What I found, once I got past that initial resistance, was that I actually had more to draw on than most candidates. Ten-plus years of experience means ten-plus years of examples, decisions, challenges, and results. The raw material was there. The work was learning how to present it in the format the process expected.</p>

      <h2>The specific challenges of a long gap</h2>

      <p><strong>Your examples feel old.</strong> If you are ten years into a role and drawing on examples from early in your tenure, they are going to feel dated. The solution is to audit your experience deliberately. What have you done in the last two to three years specifically? Recent examples are almost always stronger than distant ones.</p>

      <p><strong>You have forgotten what you have done.</strong> When you have been somewhere a long time, the things you have achieved become part of the wallpaper. Sit down and write out everything you have built, improved, led, or delivered in the last three years. You will be surprised what comes up.</p>

      <p><strong>You are not used to talking about yourself.</strong> In a senior role, you spend most of your time talking about the work, the team, the business. You become very practised at deflecting credit and speaking in "we" rather than "I". That is good management. It is terrible interview technique. Relearning to say "I did this, I decided that, I was responsible for this outcome" takes genuine practice.</p>

      <p><strong>The process itself feels unfamiliar.</strong> When was the last time you did a timed presentation to strangers? If the answer is years ago, the format itself will feel uncomfortable even if the content is strong. The only solution is practice, not preparation, practice. Doing the thing, not just thinking about doing it.</p>

      {/* STAT FIXED: was "less than ten seconds", now 7.4s with TheLadders citation */}
      <p>One more thing worth knowing: a recruiter's initial scan of your CV takes an average of 7.4 seconds (TheLadders, eye-tracking study). That is not a reason to panic. It is a reason to make sure your most relevant achievements are at the top, in plain language, where a fast scan lands on them. The same study found that 48% of recruiters spend at least a minute on a CV once it clears that first scan. Getting past the first seven seconds is the job. After that, the detail matters.</p>

      <h2>What actually helped me</h2>

      <p><strong>Treating it like a skill to relearn, not a test to pass.</strong> Interviewing is a skill. Like any skill, you get better at it with practice and worse without it. Going in with that mindset made the discomfort more manageable and more productive.</p>

      <p><strong>Auditing my examples before I needed them.</strong> I spent an evening going through the last few years and writing down every significant project, decision, piece of feedback, difficult conversation, and result I could remember. When questions came up in the interview, I had a mental library to draw from rather than scrambling under pressure.</p>

      <p><strong>Practising out loud, not in my head.</strong> There is a massive difference between thinking through an answer and actually saying it. When you say it out loud, you discover where you trail off, where you are vague, where you lose the thread. You need to find those gaps before the interview, not during it.</p>

      <p><strong>Getting feedback on what I was actually saying.</strong> The most useful preparation I did was getting specific feedback on specific answers, not "that was good" but "you did not actually answer the question" or "you spent too long on the context and rushed the result."</p>

      <h2>Why I built something about this</h2>

      <p>Around the time I was going through all of this, I kept seeing posts about AI agents being built for organisations, tools to help companies hire better, screen faster, assess more efficiently. All of it pointed inward, at the employer.</p>

      <p>Nobody was building anything for the candidate.</p>

      <p>That gap, combined with what I was going through myself, is why I built the AI Interview Coach. I needed something that would ask me real questions based on the actual job I was applying for, coach me on my specific answers, and help me practise until the fluency was there. Something that gave me the kind of feedback I would give a candidate, but about my own performance.</p>

      <p>If you are in the position I was in, that is exactly what it is built for.</p>

      <h2>If you are in this position right now</h2>

      <p>The most important thing I can tell you is that your experience is an asset, not a liability. The challenge is not that you do not have enough to say, it is learning how to say it in the format the interview process expects.</p>

      <p>That is a learnable thing. It takes practice, not talent. Give yourself permission to be a beginner at this specific thing, even if you are an expert at everything the role requires.</p>

      <p>The room is not full of people who are naturally brilliant at interviews. It is full of people who practised, and people who did not. You can choose which one you are.</p>

    </ArticleLayout>
  );
}
