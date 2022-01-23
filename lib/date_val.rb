class DateVal

  FORMATS = {
    long:           '%-d %B, %Y',
    long_with_time: '%-d %B, %Y %H:%M UTC %z Berlin',
    time:  '%H:%M UTC %z'
  }

  def self.[](datetime)
    self.new datetime: datetime
  end

  def initialize datetime:
    @datetime = datetime
    freeze
  end

  def to_s format: :long
    @datetime.strftime FORMATS[format]
  end

end

